// script3.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const questionText = document.getElementById('question-text');
    const answersContainer = document.querySelector('.answers');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const homeBtn = document.getElementById('home-btn');
    const totalCount = document.getElementById('total-count');
    const progressBar = document.querySelector('.progress-bar');
    
    // State variables
    let currentQuestionIndex = 0;
    let showAnswer = false;
    let usedIndices = new Set();
    
    // Initialize
    function init() {
        if (!questions || questions.length === 0) {
            questionText.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-triangle"></i> Suallar yüklənmədi. Zəhmət olmasa, cavab.js faylını yoxlayın.</div>';
            return;
        }
        
        // Update total count
        totalCount.textContent = questions.length;
        
        // Load a random question
        loadRandomQuestion();
        
        // Update progress
        updateProgress();
    }
    
    // Load a random question
    function loadRandomQuestion() {
        if (questions.length === 0) return;
        
        // Reset used indices if all have been used
        if (usedIndices.size >= questions.length) {
            usedIndices.clear();
        }
        
        // Find a new random index
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * questions.length);
        } while (usedIndices.has(randomIndex) && usedIndices.size < questions.length);
        
        usedIndices.add(randomIndex);
        currentQuestionIndex = randomIndex;
        showAnswer = false;
        
        displayQuestion();
    }
    
    // Display current question
    function displayQuestion() {
        if (currentQuestionIndex < 0 || currentQuestionIndex >= questions.length) {
            questionText.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-triangle"></i> Sual tapılmadı.</div>';
            return;
        }
        
        const currentQuestion = questions[currentQuestionIndex];
        
        // Display question
        questionText.innerHTML = `<div class="question-number">Sual ${currentQuestionIndex + 1}/${questions.length}</div>
                                 <div class="question-content">${currentQuestion.question}</div>`;
        
        // Clear answers container
        answersContainer.innerHTML = '';
        
        // Update button text
        nextBtn.innerHTML = '<i class="fas fa-eye"></i> Cavabı Göstər';
        
        // Disable prev button if at first question
        prevBtn.disabled = usedIndices.size <= 1;
    }
    
    // Show answer
    function showCurrentAnswer() {
        if (currentQuestionIndex < 0 || currentQuestionIndex >= questions.length) return;
        
        const currentQuestion = questions[currentQuestionIndex];
        
        // Create answer element
        const answerElement = document.createElement('div');
        answerElement.className = 'answer';
        answerElement.innerHTML = `
            <div class="answer-header">
                <i class="fas fa-lightbulb"></i>
                <span>CAVAB:</span>
            </div>
            <div class="answer-content">${currentQuestion.answer}</div>
        `;
        
        // Add to answers container
        answersContainer.innerHTML = '';
        answersContainer.appendChild(answerElement);
        
        // Update button text
        nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Növbəti Sual';
        
        showAnswer = true;
    }
    
    // Go to next question
    function nextQuestion() {
        if (showAnswer) {
            loadRandomQuestion();
        } else {
            showCurrentAnswer();
        }
    }
    
    // Go to previous question
    function previousQuestion() {
        if (usedIndices.size <= 1) return;
        
        // Remove current index
        usedIndices.delete(currentQuestionIndex);
        
        // Get the last used index
        const indicesArray = Array.from(usedIndices);
        const lastIndex = indicesArray[indicesArray.length - 1];
        
        currentQuestionIndex = lastIndex;
        showAnswer = false;
        
        displayQuestion();
    }
    
    // Update progress
    function updateProgress() {
        if (questions.length === 0) return;
        
        const progressPercent = (usedIndices.size / questions.length) * 100;
        progressBar.style.width = `${Math.min(progressPercent, 100)}%`;
    }
    
    // Event Listeners
    nextBtn.addEventListener('click', function() {
        nextQuestion();
        updateProgress();
    });
    
    prevBtn.addEventListener('click', function() {
        previousQuestion();
        updateProgress();
    });
    
    homeBtn.addEventListener('click', function() {
        loadRandomQuestion();
        updateProgress();
    });
    
    // Initialize the app
    init();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
                nextBtn.click();
                e.preventDefault();
                break;
            case 'ArrowLeft':
                if (!prevBtn.disabled) {
                    prevBtn.click();
                    e.preventDefault();
                }
                break;
            case 'Home':
                homeBtn.click();
                e.preventDefault();
                break;
        }
    });
});
// 🔐 SESSION PROTECTION (RUNS FIRST)
const user = sessionStorage.getItem("loggedInUser");
if (!user) {
  window.location.href = "index.html";
}


