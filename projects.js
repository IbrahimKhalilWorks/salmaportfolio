const projects = [
  {
    title: "Social Media Post",
    description: "Nice social media post design.",
    image: "1.jpg",
    category: "Social Media Post",
  },
  {
    title: "Menu Design",
    description: "Elegant and modern menu design for restaurants.",
    image: "2.jpg",
    category: "Menu",
  },
  {
    title: "Menu Design",
    description: "Creative and visually appealing restaurant menu design.",
    image: "3.jpg",
    category: "Menu",
  },
  {
    title: "Webpage UI/UX",
    description: "A sleek and modern website design with intuitive UI/UX.",
    image: "4.jpg",
    category: "Webpage",
  },
  {
    title: "Brochure Design",
    description: "A professionally designed brochure for marketing purposes.",
    image: "5.jpg",
    category: "Broucher",
  },
  {
    title: "Company Brochure",
    description: "A visually appealing company brochure design.",
    image: "6.jpg",
    category: "Broucher",
  },
  {
    title: "Company Cards",
    description: "Minimalistic and professional company card design.",
    image: "7.jpg",
    category: "Cards",
  },
  {
    title: "Social Media Post Design",
    description: "Awesome social media post design for branding.",
    image: "8.jpg",
    category: "Social Media Post",
  },
  {
    title: "Webpage UI",
    description: "An online marketplace platform for buying and selling products.",
    image: "10.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A task management tool designed for collaboration and productivity.",
    image: "11.jpg",
    category: "Webpage",
  },
  {
    title: "Design Concept",
    description: "A web-based photo gallery with interactive features.",
    image: "12.jpg",
    category: "Design",
  },
  {
    title: "Webpage UI",
    description: "An event planning application with attendee management.",
    image: "13.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A recipe-sharing platform with social features.",
    image: "14.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A customizable web app for managing online stores.",
    image: "15.jpg",
    category: "Webpage",
  },
  {
    title: "Design Concept",
    description: "A photo editing app with powerful filters.",
    image: "16.jpg",
    category: "Design",
  },
  {
    title: "Webpage UI",
    description: "A sleek website for showcasing portfolios.",
    image: "17.jpg",
    category: "Webpage",
  },
  {
    title: "Design Concept",
    description: "An interactive game built with WebGL.",
    image: "18.jpg",
    category: "Design",
  },
  {
    title: "Webpage UI",
    description: "A minimalistic website for photography portfolios.",
    image: "20.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A web-based fitness tracker with personalized workout plans.",
    image: "21.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A web-based budgeting tool for managing expenses.",
    image: "22.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A website for displaying dynamic content based on user preferences.",
    image: "24.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A web-based platform for managing virtual meetings.",
    image: "25.jpg",
    category: "Webpage",
  },
  {
    title: "Webpage UI",
    description: "A web application for project management.",
    image: "29.jpg",
    category: "Webpage",
  },
  {
    title: "Design Concept",
    description: "An online platform for digital art portfolios.",
    image: "28.jpg",
    category: "Design",
  },
  {
    title: "Design Concept",
    description: "A customizable website theme for blogs.",
    image: "31.jpg",
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
