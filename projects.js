const projects = [
  {
    title: "Webpage UI",
    description: "Professionally crafted UI/UX designs for seamless experiences..",
    image: "1.jpg",
    category: "Social Media Post",
  },
  {
    title: "Webpage UI",
    description: "Professionally crafted UI/UX designs for seamless experiences..",
    image: "2.jpg",
    category: "Menu",
  },
  {
    title: "Webpage UI",
    description: "Professionally crafted UI/UX designs for seamless experiences.",
    image: "3.jpg",
    category: "Menu",
  },
  {
    title: "Flyer Design",
    description: "A professionally designed Flyer for marketing purposes.",
    image: "4.jpg",
    category: "Webpage",
  },
  {
    title: "Flyer Design",
    description: "Nice Flyer design.",
    image: "5.jpg",
    category: "Broucher",
  },
  {
    title: "Flyer Design",
    description: "Awesome Flyer design for company.",
    image: "6.jpg",
    category: "Broucher",
  },
  {
    title: "Flyer Design",
    description: "Nice Flyer design.",
    image: "7.jpg",
    category: "Cards",
  },
  {
    title: "Flyer Design",
    description: "Awesome social media post design for branding.",
    image: "8.jpg",
    category: "Social Media Post",
  },
  {
    title: "Flyer Design",
    description: "A professionally designed brochure for marketing purposes.",
    image: "9.jpg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "10.jpg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "11.jpg",
    category: "Design",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "12.jpg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "13.jpg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "14.jpg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "15.jpg",
    category: "Design",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "16.jpg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "An interactive game built with WebGL.",
    image: "17.jpg",
    category: "Design",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "18.jpg",
    category: "Webpage",
  },
  {
    title: "Bifold Brochure",
    description: "A professionally designed brochure for marketing purposes.",
    image: "19.jpg",
    category: "Webpage",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "20.jpg",
    category: "Webpage",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "21.jpg",
    category: "Webpage",
  },
  {
    title: "Trifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "22.jpg",
    category: "Webpage",
  },
  {
    title: "Trifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "23.jpg",
    category: "Webpage",
  },
  {
    title: "Trifold Brochure",
    description: "An online platform for digital art portfolios.",
    image: "24.jpg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "25.jpg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "26.jpg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "27.jpg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "28.jpg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "29.jpg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "30.jpg",
    category: "Design",
  },
];


document.addEventListener("DOMContentLoaded", () => {
  const projectsGrid = document.querySelector(".projects-grid");
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  // Create project cards
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <img class="project-image" src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
        </div>
    `;
    card.addEventListener("click", () => openModal(project));
    projectsGrid.appendChild(card);
  });

  // Open modal function
  function openModal(project) {
    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modal.style.display = "block";
  }

  // Close modal function
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for close button
  document.getElementById("closeModal").addEventListener("click", closeModal);

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
