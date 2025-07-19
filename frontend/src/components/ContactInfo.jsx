import React from 'react';

export default function ContactInfo() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            textAlign: 'left',
            fontSize: '0.9rem',
            color: '#87CEEB',  // light blue
            marginTop: '2rem',
            paddingTop: '1rem',
            borderTop: '1px solid #ccc'
        }}>
            <div>
                <h3>Contact Details</h3>
                <p><strong>Email:</strong> support@aibox.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Fax:</strong> +1 (555) 123-4568</p>
                <p><strong>Address:</strong> 123 AI Boulevard, Tech City, TC 12345</p>
            </div>
            <div>
                <h3>About Us</h3>
                <p><strong>Website:</strong> <a href="https://www.aibox.com" target="_blank" rel="noopener noreferrer">www.aibox.com</a></p>
                <p><strong>Support Hours:</strong> Mon-Fri, 9am - 5pm</p>
                <p><strong>Motto:</strong> <em>"Where prompts become possibilities."</em></p>
                <p><strong>Follow Us:</strong></p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li><a href="https://twitter.com/aibox" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://github.com/aibox" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/company/aibox" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
}