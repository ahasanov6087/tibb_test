// DOM Elements
const questionText = document.getElementById('question-text');
const answersContainer = document.querySelector('.answers');
const showAnswerBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const homeBtn = document.getElementById('home-btn');
const totalCountEl = document.getElementById('total-count');

// State variables
let currentQuestion = null;
let answerRevealed = false;
let questionHistory = [];
let currentHistoryIndex = -1;
let totalQuestions = 0; // Will reset to 0 on refresh

// Initialize the app
function init() {
    // NO localStorage - everything resets on refresh
    totalQuestions = 0;
    updateTotalDisplay();
    showRandomQuestion();
    updateButtons();
    
    // Event Listeners
    showAnswerBtn.addEventListener('click', handleShowAnswer);
    prevBtn.addEventListener('click', showPreviousQuestion);
    homeBtn.addEventListener('click', showRandomQuestion);
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
    switch(e.key) {
        case ' ':
        case 'Enter':
            e.preventDefault();
            handleShowAnswer();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            if (!prevBtn.disabled) showPreviousQuestion();
            break;
        case 'r':
        case 'R':
            e.preventDefault();
            showRandomQuestion();
            break;
    }
}

// Update total questions display
function updateTotalDisplay() {
    totalCountEl.textContent = totalQuestions;
}

// Show a random question
function showRandomQuestion() {
    // Get a random question
    currentQuestion = getRandomQuestion();
    
    // Increment total questions count
    totalQuestions++;
    
    // Add to history
    questionHistory.push({
        question: currentQuestion.question,
        answer: currentQuestion.answer,
        timestamp: new Date().toLocaleTimeString('az-AZ')
    });
    
    currentHistoryIndex = questionHistory.length - 1;
    
    // Update display
    displayQuestion();
    
    // Reset answer state
    answerRevealed = false;
    
    // Update buttons
    updateButtons();
    
    // Update total display
    updateTotalDisplay();
}

// Display the current question
function displayQuestion() {
    if (!currentQuestion) return;
    
    // Set question text with animation
    questionText.innerHTML = `<i class="fas fa-question-circle" style="color: var(--primary-color); margin-right: 10px;"></i>${currentQuestion.question}`;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer placeholder
    const answerButton = document.createElement('button');
    answerButton.className = 'answer-btn';
    answerButton.innerHTML = `
        <span class="answer-letter">?</span>
        <span class="answer-text">Cavabı görmək üçün "Cavabı Göstər" düyməsini basın</span>
    `;
    answerButton.disabled = true;
    
    // Add some styling
    answerButton.style.background = 'linear-gradient(to right, #f8f9fa, #e9ecef)';
    answerButton.style.border = '2px dashed var(--border-color)';
    answerButton.style.color = 'var(--text-secondary)';
    answerButton.style.fontStyle = 'italic';
    
    answersContainer.appendChild(answerButton);
}

// Handle showing the answer
function handleShowAnswer() {
    if (!currentQuestion) return;
    
    if (!answerRevealed) {
        // Show the answer
        revealAnswer();
        showAnswerBtn.innerHTML = '<i class="fas fa-redo"></i> Yeni Sual';
        answerRevealed = true;
    } else {
        // Get a new random question
        showRandomQuestion();
        showAnswerBtn.innerHTML = '<i class="fas fa-eye"></i> Cavabı Göstər';
    }
    
    updateButtons();
}

// Reveal the answer
function revealAnswer() {
    if (!currentQuestion) return;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create the correct answer button with animation
    const correctButton = document.createElement('button');
    correctButton.className = 'answer-btn correct';
    correctButton.innerHTML = `
        <span class="answer-letter"><i class="fas fa-check"></i></span>
        <span class="answer-text"><strong>${currentQuestion.answer}</strong></span>
    `;
    correctButton.disabled = true;
    
    // Add success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
        margin-top: 1.5rem;
        padding: 1rem;
        background: linear-gradient(to right, #e8f5e9, #c8e6c9);
        border-radius: var(--radius-sm);
        border-left: 4px solid var(--secondary-color);
        text-align: center;
        font-size: 1.1rem;
        color: var(--secondary-dark);
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.2);
    `;
    successMessage.innerHTML = `
        <i class="fas fa-lightbulb" style="margin-right: 10px;"></i>
        <strong>Cavab budur!</strong> Yeni sual üçün "Yeni Sual" düyməsini basın.
    `;
    
    answersContainer.appendChild(correctButton);
    answersContainer.appendChild(successMessage);
    
    // Add congratulatory animation
    correctButton.style.animation = 'pulse 0.5s ease';
}

// Show previous question from history
function showPreviousQuestion() {
    if (currentHistoryIndex > 0) {
        currentHistoryIndex--;
        const historyItem = questionHistory[currentHistoryIndex];
        
        // Create a temporary question object
        currentQuestion = {
            question: historyItem.question,
            answer: historyItem.answer
        };
        
        // Display the question
        displayQuestion();
        
        // Show the answer immediately for previous questions
        revealAnswer();
        answerRevealed = true;
        showAnswerBtn.innerHTML = '<i class="fas fa-redo"></i> Yeni Sual';
        
        updateButtons();
    }
}

// Update button states
function updateButtons() {
    // Previous button
    prevBtn.disabled = currentHistoryIndex <= 0;
    
    // Update progress bar based on history
    const progressPercent = questionHistory.length > 0 ? 
        ((currentHistoryIndex + 1) / questionHistory.length) * 100 : 0;
    
    document.querySelector('.progress-bar').style.width = `${progressPercent}%`;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);