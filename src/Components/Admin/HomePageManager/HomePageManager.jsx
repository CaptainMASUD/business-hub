'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const HomePageManager = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome to NAZ', content: 'NAZ is a leading service provider company...' },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: Date.now(), ...newPost }]);
      setNewPost({ title: '', content: '' });
    }
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Home Page</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 mb-2 border rounded"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Post Content"
          className="w-full p-2 mb-2 border rounded"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button
          onClick={handleAddPost}
          className="bg-[#BE3144] text-white px-4 py-2 rounded flex items-center"
        >
          <FaPlus className="mr-2" /> Add Post
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.content}</p>
            <div className="mt-2">
              <button className="text-blue-500 mr-2"><FaEdit /></button>
              <button onClick={() => handleDeletePost(post.id)} className="text-red-500"><FaTrash /></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomePageManager;
