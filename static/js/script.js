const sampleData = {
    transcript: `Welcome to AI Fundamentals lecture. Today we explore machine learning concepts including supervised learning, neural networks, and deep learning applications. These technologies drive innovation across healthcare, finance, and autonomous systems.`,
    summary: `Lecture covers ML basics: supervised learning, neural networks, and deep learning applications in healthcare, finance, and autonomous systems.`
};

document.addEventListener('DOMContentLoaded', () => {
    const uploadBox = document.getElementById('uploadBox');
    const audioInput = document.getElementById('audioInput');
    const fileInfo = document.getElementById('fileInfo');
    const processBtn = document.getElementById('processBtn');
    const sampleBtn = document.getElementById('sampleBtn');
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    const browseBtn = uploadBox.querySelector('button');

    browseBtn.addEventListener('click', () => audioInput.click());
    uploadBox.addEventListener('click', (e) => {
        if (e.target !== browseBtn) audioInput.click();
    });
    
    audioInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        showFileInfo(file);
        processBtn.disabled = false;
    });

    processBtn.addEventListener('click', () => processAudio());
    sampleBtn.addEventListener('click', loadSample);
    document.querySelectorAll('.copyBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            copyToClipboard(e.target.closest('.copyBtn').dataset.target);
        });
    });
});

function showFileInfo(file) {
    const fileInfo = document.getElementById('fileInfo');
    fileInfo.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                <i class="fas fa-file-audio text-indigo-400 text-xl"></i>
                <div>
                    <p class="font-medium">${file.name}</p>
                    <p class="text-gray-400 text-sm">${formatSize(file.size)} • ${file.type.split('/')[1]}</p>
                </div>
            </div>
            <button onclick="clearFile()" class="text-gray-400 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    fileInfo.classList.remove('hidden');
}

async function processAudio() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    await new Promise(resolve => setTimeout(resolve, 2000));
    showResults(sampleData);
    showToast('Audio processed successfully!');
}

function loadSample() {
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(() => {
        showResults(sampleData);
        showToast('Sample data loaded');
    }, 1500);
}

function showResults(data) {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('transcriptText').textContent = data.transcript;
    document.getElementById('summaryText').textContent = data.summary;
    const wc = data.transcript.split(/\s+/).length;
    const sc = data.summary.split(/\s+/).length;
    document.getElementById('wordCount').textContent = `${wc} words`;
    document.getElementById('summaryCount').textContent = `${sc} words`;
    document.getElementById('results').classList.remove('hidden');
}

function clearFile() {
    document.getElementById('audioInput').value = '';
    document.getElementById('fileInfo').classList.add('hidden');
    document.getElementById('processBtn').disabled = true;
}

async function copyToClipboard(type) {
    const text = type === 'transcript' 
        ? document.getElementById('transcriptText').textContent
        : document.getElementById('summaryText').textContent;
    await navigator.clipboard.writeText(text);
    showToast(`${type} copied!`);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.remove('translate-y-20');
    setTimeout(() => toast.classList.add('translate-y-20'), 3000);
}

function formatSize(bytes) {
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + ['B','KB','MB','GB'][i];
}