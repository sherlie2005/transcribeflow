
# 🎙️ TranscribeFlow — Audio Transcript Summarizer

TranscribeFlow is a web application that converts audio files into text and then generates a concise summary using a two-stage AI pipeline (ASR + NLP). It is designed to help students and knowledge workers quickly extract key information from lectures, meetings, and podcasts.

---

## 📌 Project Overview

**Problem**  
Listening to long audio recordings or manually transcribing and summarizing them is time-consuming and inefficient.

**Solution**  
TranscribeFlow automates this process by:
1. Transcribing audio into text using a pre-trained ASR model
2. Summarizing the transcript using a pre-trained NLP model
3. Displaying both transcript and summary via a simple web interface

---

## 🎯 Outcomes

- Accurate **audio-to-text transcription**
- Concise **text summarization**
- Simple **web-based UI**
- Support for common audio formats (MP3, WAV)

---

## 🧩 Project Modules

### 1. Audio Upload & Processing
- Frontend form to upload audio
- Backend API to receive and temporarily store files

### 2. Core AI Inference
- ASR: Pre-trained Whisper / Wav2Vec2 (Hugging Face)
- Summarization: Pre-trained T5 / BART
- Sequential pipeline: Audio → Transcript → Summary

### 3. Web Application Server
- FastAPI-based backend
- HTML / Tailwind CSS / JS frontend
- API endpoint to return transcript and summary

---

## 🛠️ Tech Stack

- **Backend**: Python, FastAPI
- **AI Models**: Hugging Face Transformers
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Audio Processing**: librosa / torchaudio
- **Version Control**: Git & GitHub

---

## 🚀 Local Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/sherlie2005/transcribeflow.git
cd transcribeflow
````

### 2. Create Virtual Environment

```bash
python -m venv venv
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
python app.py
```

Open browser at:

```
http://127.0.0.1:5000
```

---

## 🔁 Team Git Workflow (MANDATORY)

### ❌ Rules

* Do NOT work directly on `main`
* Do NOT push to `main`
* Do NOT force push

---

### ✅ Correct Workflow for Collaborators

#### 1. Always start by syncing `main`

```bash
git checkout main
git pull origin main
```

#### 2. Create a feature branch for your task

```bash
git checkout -b feature/<your-name>-<task>
```

Example:

```bash
git checkout -b feature/kartikey-asr-logic
```

#### 3. Work on your code

```bash
git status
git add .
git commit -m "Integrate ASR transcription pipeline"
```

#### 4. Sync with latest `main` BEFORE pushing

```bash
git checkout main
git pull origin main
git checkout feature/kartikey-asr-logic
git merge main
```

Resolve conflicts if any, then:

```bash
git add .
git commit -m "Resolve merge conflicts with main"
```

#### 5. Push ONLY your feature branch

```bash
git push origin feature/kartikey-asr-logic
```

---

## 🔀 Merging Policy

* Merging is done via GitHub after review by 1 more team member
* `main` must always remain stable

---

## 📁 Suggested Repository Structure

```
transcribeflow/
│
├── app.py
├── requirements.txt
├── models/
│   ├── asr.py
│   └── summarizer.py
├── static/
│   ├── css/
│   └── js/
├── templates/
│   └── index.html
├── uploads/
├── README.md
```

---

## 📌 Contribution Guidelines

* One feature / fix per branch
* Always sync with `main` before pushing
* Ask before making architectural changes

```
