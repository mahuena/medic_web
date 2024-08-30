export const About = () => {
    return (
        <div className="about-container">
            <h1>About Our Pharmacy</h1>
            <p>
                Welcome to [Pharmacy Name], your trusted partner in healthcare.
                Our mission is to provide high-quality pharmaceutical services
                and products to improve the health and well-being of our community.
            </p>
            <p>
                Established in [Year], we offer a wide range of services including
                prescription medications, over-the-counter drugs, and personalized
                consultations. Our experienced pharmacists are here to provide
                expert advice and ensure you receive the best care possible.
            </p>
            <p>
                At [Pharmacy Name], we are committed to your health and satisfaction.
                Visit us today and experience the difference in personalized pharmacy care.
            </p>
            <footer>
                <p>&copy; {new Date().getFullYear()} [Pharmacy Name]. All rights reserved.</p>
            </footer>
        </div>
    );
};