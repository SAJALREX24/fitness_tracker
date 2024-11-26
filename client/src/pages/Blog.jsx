import React from 'react';

const BlogPage = () => {
  // Array of fitness-related content with images
  const blogs = [
    {
      id: 1,
      title: '5 Best Workouts for Beginners',
      body: 'Starting your fitness journey? Try these 5 simple yet effective workouts to build strength and stamina.',
      image: 'https://via.placeholder.com/300x200?text=Workouts+for+Beginners',
    },
    {
      id: 2,
      title: '10 Healthy Snacks for Weight Loss',
      body: 'Snacking smart can help you lose weight. Here are 10 healthy snack ideas that are both delicious and nutritious.',
      image: 'https://via.placeholder.com/300x200?text=Healthy+Snacks',
    },
    {
      id: 3,
      title: 'The Importance of Hydration in Fitness',
      body: 'Staying hydrated is key to optimizing your workouts. Learn how much water you should drink daily.',
      image: 'https://via.placeholder.com/300x200?text=Hydration+in+Fitness',
    },
    {
      id: 4,
      title: 'Yoga for Stress Relief',
      body: 'Feeling stressed? Discover how yoga can help you relax, reduce stress, and improve your mental clarity.',
      image: 'https://via.placeholder.com/300x200?text=Yoga+for+Stress+Relief',
    },
    {
      id: 5,
      title: 'Top 5 Benefits of Strength Training',
      body: 'Strength training isn’t just for bodybuilders. It boosts metabolism, improves bone health, and more.',
      image: 'https://via.placeholder.com/300x200?text=Strength+Training',
    },
    {
      id: 6,
      title: 'How to Create a Weekly Fitness Routine',
      body: 'Consistency is key. Learn how to structure a weekly fitness routine that fits your goals and lifestyle.',
      image: 'https://via.placeholder.com/300x200?text=Fitness+Routine',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Fitness Blog</h1>
      <div style={styles.grid}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.card}>
            <img src={blog.image} alt={blog.title} style={styles.image} />
            <h2 style={styles.title}>{blog.title}</h2>
            <p style={styles.body}>{blog.body}</p>
            <button style={styles.button}>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f7f7f9',
    height: '100vh', // Occupy full viewport height
    overflowY: 'auto', // Enable vertical scrolling
    boxSizing: 'border-box',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
    fontSize: '28px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 20px',
    color: '#2c3e50',
  },
  body: {
    fontSize: '16px',
    color: '#555',
    margin: '0 20px 15px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px 15px',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '0 0 8px 8px',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default BlogPage;
