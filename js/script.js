// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(anchor.getAttribute('href'));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    e.target.reset();
  });
  
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  const animateOnScroll = () => {
    const sections = document.querySelectorAll('.about, .services, .contact, .testimonials');
    sections.forEach((section) => {
        console.log("is it ? ", isInViewport(section))
        section.classList.add('visible');
    });
  };
  
  window.addEventListener('load', animateOnScroll);

  // Function to animate statistics counters
const animateCounters = () => {
  const counters = document.querySelectorAll('.stat-card h3');
  const speed = 200; // Animation speed (lower = faster)

  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-count'); // Get target number
    const increment = target / speed; // Calculate increment value

    const updateCount = () => {
      const current = +counter.innerText.replace(/,/g, ''); // Remove commas
      if (current < target) {
        counter.innerText = Math.ceil(current + increment).toLocaleString(); // Add commas
        setTimeout(updateCount, 1); // Continue animation
      } else {
        counter.innerText = target.toLocaleString(); // Set final value
      }
    };

    updateCount(); // Start animation
  });
};

const handleScroll = () => {
  const statisticsSection = document.querySelector('.statistics');
  if (isInViewport(statisticsSection)) {
    animateCounters();
    window.removeEventListener('scroll', handleScroll); // Stop listening after animation
  }
};

window.addEventListener('scroll', handleScroll);
  