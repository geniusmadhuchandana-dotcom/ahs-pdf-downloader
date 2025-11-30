// Document library data
const documents = [
    {
        name: "Bones and Joints",
        filename: "ANATOMY/bones and joints - Copy.pptx",
        type: "PPTX",
        icon: "🦴",
        category: "Skeletal System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Individual Muscle",
        filename: "ANATOMY/individual muscle.pptx",
        type: "PPTX",
        icon: "💪",
        category: "Muscular System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Cardiovascular System",
        filename: "ANATOMY/Cardiovascular system.pptx",
        type: "PPTX",
        icon: "❤️",
        category: "Cardiovascular System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Endocrine System",
        filename: "ANATOMY/endocrine system.pptx",
        type: "PPTX",
        icon: "🧬",
        category: "Endocrine System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Female Reproductive Organs",
        filename: "ANATOMY/Female reproductive organs.pptx",
        type: "PPTX",
        icon: "🔬",
        category: "Reproductive System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Nervous and Sensory System",
        filename: "ANATOMY/nervous and sensory system.pptx",
        type: "PPTX",
        icon: "🧠",
        category: "Nervous System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Respiratory System",
        filename: "ANATOMY/respiratory system.pptx",
        type: "PPTX",
        icon: "🫁",
        category: "Respiratory System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Urinary System",
        filename: "ANATOMY/Urinary system.pptx",
        type: "PPTX",
        icon: "💧",
        category: "Urinary System",
        semester: 1,
        subject: "Anatomy"
    },
    {
        name: "Introduction to Psychology - Unit I",
        filename: "PYSCHOLOGY/Introduction to Psychology-Unit I.pptx",
        type: "PPTX",
        icon: "🧑‍🎓",
        category: "Psychology Basics",
        semester: 1,
        subject: "Psychology"
    },
    {
        name: "Physiological Psychology - Unit 2",
        filename: "PYSCHOLOGY/Physiological psychology unit-2.pptx",
        type: "PPTX",
        icon: "🧪",
        category: "Physiological Psychology",
        semester: 1,
        subject: "Psychology"
    },
    {
        name: "Learning and Memory - Unit 3",
        filename: "PYSCHOLOGY/Learning and memory unit-3.pptx",
        type: "PPTX",
        icon: "📚",
        category: "Cognitive Psychology",
        semester: 1,
        subject: "Psychology"
    },
    {
        name: "Personality, Motivation and Emotion - Unit 4",
        filename: "PYSCHOLOGY/Personality motivation and emotion unit-4.pptx",
        type: "PPTX",
        icon: "😊",
        category: "Personality Psychology",
        semester: 1,
        subject: "Psychology"
    },
    {
        name: "Attitude and Stress - Unit 5",
        filename: "PYSCHOLOGY/attitude and stress unit- 5.pptx",
        type: "PPTX",
        icon: "💭",
        category: "Health Psychology",
        semester: 1,
        subject: "Psychology"
    },
    {
        name: "Medical Terminologies - 1",
        filename: "MEDICAL TERMINOLOGIES/Medical terminologies -1.pptx",
        type: "PPTX",
        icon: "📖",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 2",
        filename: "MEDICAL TERMINOLOGIES/Medical terminologies -2.pptx",
        type: "PPTX",
        icon: "📝",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 3",
        filename: "MEDICAL TERMINOLOGIES/Medical terminologies -3.pptx",
        type: "PPTX",
        icon: "📋",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 4",
        filename: "MEDICAL TERMINOLOGIES/Medical terminologies -4.pptx",
        type: "PPTX",
        icon: "📄",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 5",
        filename: "MEDICAL TERMINOLOGIES/MEDICAL TERMINOLOGIES -5.pptx",
        type: "PPTX",
        icon: "📑",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 6",
        filename: "MEDICAL TERMINOLOGIES/MEDICAL TERMINOLOGIES - 6.pptx",
        type: "PPTX",
        icon: "📃",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 7",
        filename: "MEDICAL TERMINOLOGIES/MEDICAL TERMINOLOGIES -7.pptx",
        type: "PPTX",
        icon: "📰",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 8",
        filename: "MEDICAL TERMINOLOGIES/Medical terminologies -8.pptx",
        type: "PPTX",
        icon: "📜",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Medical Terminologies - 9",
        filename: "MEDICAL TERMINOLOGIES/Medical terminologies - 9.pptx",
        type: "PPTX",
        icon: "📚",
        category: "Medical Terminology",
        semester: 1,
        subject: "Medical Terminology"
    },
    {
        name: "Blood Physiology",
        filename: "PHYSIOLOGY/Blood -phy.pptx",
        type: "PPTX",
        icon: "🩸",
        category: "Cardiovascular Physiology",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Endocrine Physiology",
        filename: "PHYSIOLOGY/Endocrine physiology.pptx",
        type: "PPTX",
        icon: "🧬",
        category: "Endocrine System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Excretory Physiology",
        filename: "PHYSIOLOGY/Excretory physiology.pptx",
        type: "PPTX",
        icon: "💧",
        category: "Renal Physiology",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Gastrointestinal Physiology",
        filename: "PHYSIOLOGY/Gastrointestinal physiology.pptx",
        type: "PPTX",
        icon: "🍽️",
        category: "Digestive System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "General Physiology",
        filename: "PHYSIOLOGY/General physiology.pptx",
        type: "PPTX",
        icon: "⚕️",
        category: "General Physiology",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Muscle Physiology",
        filename: "PHYSIOLOGY/Muscle physiology.pptx",
        type: "PPTX",
        icon: "💪",
        category: "Muscular System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Nervous Physiology",
        filename: "PHYSIOLOGY/NERVOUS PHYSIOLOGY.pptx",
        type: "PPTX",
        icon: "🧠",
        category: "Nervous System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Cardiovascular Physiology",
        filename: "PHYSIOLOGY/Cardiovascular physiology.pptx",
        type: "PPTX",
        icon: "❤️",
        category: "Cardiovascular System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Reproductive Physiology",
        filename: "PHYSIOLOGY/Reproductive physiology.pptx",
        type: "PPTX",
        icon: "🔬",
        category: "Reproductive System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Respiratory Physiology",
        filename: "PHYSIOLOGY/Respiratory physiology.pptx",
        type: "PPTX",
        icon: "🫁",
        category: "Respiratory System",
        semester: 1,
        subject: "Physiology"
    },
    {
        name: "Special Senses",
        filename: "PHYSIOLOGY/Special senses.pptx",
        type: "PPTX",
        icon: "👁️",
        category: "Sensory System",
        semester: 1,
        subject: "Physiology"
    }
];

// Subjects for each semester
const semesterSubjects = {
    1: ["Anatomy", "Physiology", "Biochemistry", "Psychology", "Medical Terminology"],
    2: ["Pathology", "Pharmacology", "Sociology", "Microbiology", "Preventive Medicine"],
    3: ["Clinical Skills", "Medical Imaging", "Laboratory Medicine"],
    4: ["Internal Medicine", "Surgery", "Pediatrics"],
    5: ["Obstetrics", "Gynecology", "Community Medicine"],
    6: ["Psychiatry", "Dermatology", "ENT"],
    7: ["Ophthalmology", "Orthopedics", "Anesthesiology"],
    8: ["Emergency Medicine", "Radiology", "Forensic Medicine"],
    9: ["Clinical Rotation I", "Research Methods"],
    10: ["Clinical Rotation II", "Final Year Project"]
};

// Track current filter state
let currentSemester = 'all';
let currentSubject = 'all';
let currentSearchTerm = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayDocuments(documents);
    updateDocumentCount(documents.length);
    
    // Setup search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Setup semester filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update current semester
            currentSemester = this.getAttribute('data-semester');
            // Reset subject filter
            currentSubject = 'all';
            // Show/hide subject filter
            displaySubjectFilter();
            // Filter documents
            filterDocuments();
        });
    });
});

// Display subject filter based on selected semester
function displaySubjectFilter() {
    const subjectFilterDiv = document.getElementById('subjectFilter');
    
    if (currentSemester === 'all') {
        subjectFilterDiv.style.display = 'none';
        return;
    }
    
    const semester = parseInt(currentSemester);
    const subjects = semesterSubjects[semester] || [];
    
    if (subjects.length === 0) {
        subjectFilterDiv.style.display = 'none';
        return;
    }
    
    subjectFilterDiv.style.display = 'flex';
    subjectFilterDiv.innerHTML = '<button class="subject-btn active" data-subject="all">All Subjects</button>';
    
    subjects.forEach(subject => {
        const btn = document.createElement('button');
        btn.className = 'subject-btn';
        btn.setAttribute('data-subject', subject);
        btn.textContent = subject;
        btn.addEventListener('click', function() {
            document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSubject = this.getAttribute('data-subject');
            filterDocuments();
        });
        subjectFilterDiv.appendChild(btn);
    });
}

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
    
    const subjectInfo = doc.subject ? ` - ${doc.subject}` : '';
    
    card.innerHTML = `
        <div class="document-icon">${doc.icon}</div>
        <div class="document-title">${doc.name}</div>
        <span class="document-type">${doc.type} - Sem ${doc.semester}${subjectInfo}</span>
        <div class="document-actions">
            <button class="btn btn-primary" onclick="openDocument('${doc.filename}')">
                Open
            </button>
            <button class="btn btn-secondary" onclick="viewDocumentInfo('${doc.name}', '${doc.category}', ${doc.semester}, '${doc.subject || 'N/A'}')">
                Info
            </button>
        </div>
    `;
    
    return card;
}

// Handle search functionality
function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase();
    filterDocuments();
}

// Filter documents based on semester, subject, and search
function filterDocuments() {
    let filteredDocs = documents;
    
    // Filter by semester
    if (currentSemester !== 'all') {
        filteredDocs = filteredDocs.filter(doc => 
            doc.semester === parseInt(currentSemester)
        );
    }
    
    // Filter by subject
    if (currentSubject !== 'all') {
        filteredDocs = filteredDocs.filter(doc => 
            doc.subject === currentSubject
        );
    }
    
    // Filter by search term
    if (currentSearchTerm) {
        filteredDocs = filteredDocs.filter(doc => {
            return doc.name.toLowerCase().includes(currentSearchTerm) ||
                   doc.category.toLowerCase().includes(currentSearchTerm) ||
                   (doc.subject && doc.subject.toLowerCase().includes(currentSearchTerm));
        });
    }
    
    displayDocuments(filteredDocs);
    updateDocumentCount(filteredDocs.length);
}

// Update document count
function updateDocumentCount(count) {
    const countElement = document.getElementById('documentCount');
    countElement.textContent = `${count} document${count !== 1 ? 's' : ''} available`;
}

// Open document
function openDocument(filename) {
    window.open(filename, '_blank');
}

// View document info
function viewDocumentInfo(name, category, semester, subject) {
    alert(`Document: ${name}\nCategory: ${category}\nSemester: ${semester}\nSubject: ${subject}\nType: PowerPoint Presentation\n\nClick Open to view this file.`);
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === '/' || (event.ctrlKey && event.key === 'f')) {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }
});
