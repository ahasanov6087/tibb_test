// cavab.js - Questions and Answers Database
const questions = [
    {
        question: "Tibb elmində ürək döyüntülərinin ölçülməsi hansı vasitə ilə aparılır?",
        answer: "EKG (Elektrokardioqram)"
    },
    {
        question: "İnsan orqanizmində qanın hansı hissəsi oksigen daşıyır?",
        answer: "Eritrositlər (qırmızı qan hüceyrələri)"
    },
    {
        question: "D vitamini əksərən hansı mənbədən əldə edilir?",
        answer: "Günəş işığı"
    },
    {
        question: "Qanda şəkərin səviyyəsini tənzimləyən hormon hansıdır?",
        answer: "İnsulin"
    },
    {
        question: "İnsan skeletində ən uzun sümük hansıdır?",
        answer: "Bud sümüyü (femur)"
    },
    {
        question: "Tənəffüs sisteminin əsas orqanı hansıdır?",
        answer: "Ağciyərlər"
    },
    {
        question: "Beyinin əsas funksiyası nədir?",
        answer: "Mərkəzi sinir sistemini idarə etmək"
    },
    {
        question: "Qaraciyərin əsas funksiyası nədir?",
        answer: "Zəhərlərin təmizlənməsi və metabolizmaya kömək"
    },
    {
        question: "Qanda ağ qan hüceyrələrinin sayının artması hansı xəstəliyi göstərə bilər?",
        answer: "Leukemiya"
    },
    {
        question: "Antibiotiklər əsasən hansı xəstəliklərə qarşı istifadə olunur?",
        answer: "Bakterial infeksiyalar"
    },
    {
        question: "İmmun sisteminin əsas funksiyası nədir?",
        answer: "Bədəni xarici təhlükələrdən qorumaq"
    },
    {
        question: "İnsan bədənində neçə cür əsas qan qrupu var?",
        answer: "4 (A, B, AB, O)"
    },
    {
        question: "Ürəyin hansı hissəsi oksigenlə zəngin qanı bədənə pompalayır?",
        answer: "Sol mədəcik"
    },
    {
        question: "Həzm sistemində qidanın əmələ gəlməsi hansı orqanda baş verir?",
        answer: "Mədə"
    },
    {
        question: "Hipokrat andı kim tərəfindən yaradılıb?",
        answer: "Qədim yunan həkimi Hipokrat"
    }
];

// Function to get a random question
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Function to get all questions
function getAllQuestions() {
    return questions;
}