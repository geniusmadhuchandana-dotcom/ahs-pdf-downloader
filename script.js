// Document library data
const documents = [
    {
        name: "Bones and Joints",
        filename: "bones and joints.pptx",
        type: "PPTX",
        icon: "🦴",
        category: "Skeletal System"
    },
    {
        name: "Endocrine System",
        filename: "endocrine system.pptx",
        type: "PPTX",
        icon: "🧬",
        category: "Endocrine System"
    },
    {
        name: "Female Reproductive Organs",
        filename: "Female reproductive organs.pptx",
        type: "PPTX",
        icon: "🔬",
        category: "Reproductive System"
    },
    {
        name: "Individual Muscle",
        filename: "individual muscle.pptx",
        type: "PPTX",
        icon: "💪",
        category: "Muscular System"
    },
    {
        name: "Nervous and Sensory System",
        filename: "nervous and sensory system.pptx",
        type: "PPTX",
        icon: "🧠",
        category: "Nervous System"
    },
    {
        name: "Respiratory System",
        filename: "respiratory system.pptx",
        type: "PPTX",
        icon: "🫁",
        category: "Respiratory System"
    },
    {
        name: "Urinary System",
        filename: "Urinary system.pptx",
        type: "PPTX",
        icon: "💧",
        category: "Urinary System"
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayDocuments(documents);
    updateDocumentCount(documents.length);
    
    // Setup search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
});

// Display documents in the grid
function displayDocuments(docs) {
    const grid = document.getElementById('documentGrid');
    grid.innerHTML = '';
    
    if (docs.length === 0) {
        grid.innerHTML = '<div class="no-results">No documents found</div>';
        return;
    }
    
    docs.forEach(doc => {
        const card = createDocumentCard(doc);
        grid.appendChild(card);
    });
}

// Create a document card
function createDocumentCard(doc) {
    const card = document.createElement('div');
    card.className = 'document-card';
    
    card.innerHTML = `
        <div class="document-icon">${doc.icon}</div>
        <div class="document-title">${doc.name}</div>
        <span class="document-type">${doc.type}</span>
        <div class="document-actions">
            <button class="btn btn-primary" onclick="downloadDocument('${doc.filename}')">
                Download
            </button>
            <button class="btn btn-secondary" onclick="viewDocumentInfo('${doc.name}', '${doc.category}')">
                Info
            </button>
        </div>
    `;
    
    return card;
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    const filteredDocs = documents.filter(doc => {
        return doc.name.toLowerCase().includes(searchTerm) ||
               doc.category.toLowerCase().includes(searchTerm);
    });
    
    displayDocuments(filteredDocs);
    updateDocumentCount(filteredDocs.length);
}

// Update document count
function updateDocumentCount(count) {
    const countElement = document.getElementById('documentCount');
    countElement.textContent = `${count} document${count !== 1 ? 's' : ''} available`;
}

// Download document
function downloadDocument(filename) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// View document info
function viewDocumentInfo(name, category) {
    alert(`Document: ${name}\nCategory: ${category}\nType: PowerPoint Presentation\n\nClick Download to get this file.`);
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === '/' || (event.ctrlKey && event.key === 'f')) {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
