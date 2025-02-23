const projects = [
  {
    title: "Webpage UI",
    description: "Professionally crafted UI/UX designs for seamless experiences..",
    image: "32 (1).jpeg",
    category: "Social Media Post",
  },
  {
    title: "Webpage UI",
    description: "Professionally crafted UI/UX designs for seamless experiences..",
    image: "32 (2).jpeg",
    category: "Menu",
  }, 
  {
    title: "Webpage UI",
    description: "Professionally crafted UI/UX designs for seamless experiences.",
    image: "32 (3).jpeg",
    category: "Menu",
  },
  {
    title: "Flyer Design",
    description: " A professionally designed Flyer for marketing purposes.",
    image: "10.jpg",
    category: "Webpage",
  },
  {
    title: "Flyer Design",
    description: "Nice Flyer design.",
    image: "11.jpg",
    category: "Broucher",
  },
  {
    title: "Flyer Design",
    description: "Awesome Flyer design for company.",
    image: "9.jpg",
    category: "Broucher",
  },
  {
    title: "Flyer Design",
    description: "Nice Flyer design.",
    image: "8.jpg",
    category: "Cards",
  },
  {
    title: "Flyer Design",
    description: "Awesome social media post design for branding.",
    image: "12.jpg",
    category: "Social Media Post",
  },
  {
    title: "Flyer Design",
    description: "A professionally designed brochure for marketing purposes.",
    image: "13.jpg",
    category: "Webpage",
  },
  {
    title: " Social media post design ",
    description: "Awesome social media post design for branding.",
    image: "33 (1).jpeg",
    category: "Webpage",
  },
  {
    title: " Social media post design ",
    description: "Awesome social media post design for branding.",
    image: "33 (2).jpeg",
    category: "Design",
  },
  {
    title: "Social media post design ",
    description: "Awesome social media post design for branding.",
    image: "33 (3).jpeg",
    category: "Webpage",
  },
  {
    title: " Social media post design",
    description: "Awesome social media post design for branding.",
    image: "33 (4).jpeg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "AAwesome social media post design for branding.",
    image: "33 (5).jpeg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "Awesome social media post design for branding.",
    image: "33 (6).jpeg",
    category: "Design",
  },
  {
    title: "Social media post design ",
    description: "Awesome social media post design for branding.",
    image: "33 (7).jpeg",
    category: "Webpage",
  },
  {
    title: "Social media post design",
    description: "An interactive game built with WebGL.",
    image: "33 (8).jpeg",
    category: "Design",
  },
  {
    title: "Social media post design ",
    description: "Awesome social media post design for branding.",
    image: "33 (9).jpeg",
    category: "Webpage",
  },
  {
    title: "Bifold Brochure ",
    description: "A professionally designed brochure for marketing purposes.",
    image: "broucher (1).jpeg",
    category: "Webpage",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "broucher (2).jpeg",
    category: "Webpage",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "broucher (3).jpeg",
    category: "Webpage",
  },
  {
    title: "Trifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "brochure2 (1).jpeg",
    category: "Webpage",
  },
  {
    title: "Trifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "brochure2 (2).jpeg",
    category: "Webpage",
  },
  {
    title: "Trifold Brochure",
    description: "An online platform for digital art portfolios.",
    image: "brochure2 (3).jpeg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "brochture (1).jpeg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose",
    image: "brochture (2).jpeg",
    category: "Design",
  }, 
   {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "brochture (3).jpeg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "borchture3 (1).jpeg",
    category: "Design",
  },
  {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "borchture3 (2).jpeg",
    category: "Design",
  }, 
   {
    title: "Bifold Brochure",
    description: "Professionally designed brochure for every purpose.",
    image: "borchture3 (3).jpeg",
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
