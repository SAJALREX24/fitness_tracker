import React from 'react';

const ContactPage = () => {
  const address = "123 Fitness Street, Workout City, Fitland";
  const phone = "+123 456 7890";
  const email = "contact@fitnesstracker.com";

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>CONTACT US !</h1>
      <p style={styles.description}>
        We'd love to hear from you! Feel free to reach out using the contact details below or visit us at our location.
      </p>

      <div style={styles.contactDetails}>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <div style={{ width: '100%' }}>
      <iframe
        title="Google Map"
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=(mathura)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{ border: 'none' }}
      >
        {/* Fallback link for browsers that don't support iframes */}
        <a href="https://www.gps.ie/">GPS Vehicle Tracker</a>
      </iframe>
    </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  description: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#666',
  },
  contactDetails: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  mapContainer: {
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '400px',
    border: '0',
    borderRadius: '8px',
  },
};

export default ContactPage;
