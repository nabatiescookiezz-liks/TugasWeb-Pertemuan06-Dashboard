const questionSets = {
	JavaScript: [
		{ category: 'DASAR', prompt: 'Perintah apa yang biasa dipakai untuk menampilkan teks di console JavaScript?', options: ['console.log()', 'show.text()', 'print.line()', 'write.console()'], answer: 0, explanation: 'console.log() digunakan untuk menampilkan teks atau nilai di console.' },
		{ category: 'VARIABEL', prompt: 'Kata let digunakan untuk apa?', options: ['Membuat variabel', 'Menghapus file', 'Mengulang program', 'Menutup halaman'], answer: 0, explanation: 'let digunakan untuk membuat variabel yang nilainya bisa diubah.' },
		{ category: 'HITUNGAN', prompt: 'Berapa hasil dari 5 + 3?', options: ['6', '7', '8', '9'], answer: 2, explanation: '5 ditambah 3 hasilnya 8.' },
		{ category: 'TIPE DATA', prompt: 'Nilai true dan false termasuk tipe data apa?', options: ['String', 'Boolean', 'Array', 'Number'], answer: 1, explanation: 'Boolean memiliki dua nilai, yaitu true dan false.' },
		{ category: 'KONDISI', prompt: 'Kata if digunakan untuk apa?', options: ['Membuat kondisi', 'Menampilkan gambar', 'Menyimpan file', 'Menghapus variabel'], answer: 0, explanation: 'if menjalankan kode ketika suatu kondisi terpenuhi.' },
		{ category: 'PERULANGAN', prompt: 'Perintah apa yang bisa digunakan untuk mengulang kode?', options: ['for', 'say', 'open', 'stop'], answer: 0, explanation: 'for adalah salah satu perintah untuk membuat perulangan.' },
		{ category: 'ARRAY', prompt: 'Indeks pertama dalam array JavaScript dimulai dari angka berapa?', options: ['0', '1', '2', '10'], answer: 0, explanation: 'Indeks array JavaScript dimulai dari 0.' },
		{ category: 'TEKS', prompt: 'Teks "Halo" ditulis menggunakan tanda apa?', options: ['Tanda kutip', 'Tanda kurung siku', 'Tanda tambah', 'Tanda garis miring'], answer: 0, explanation: 'Teks atau string ditulis di antara tanda kutip.' }
	],
	Python: [
		{ category: 'DASAR', prompt: 'Perintah apa yang digunakan untuk menampilkan teks di Python?', options: ['print()', 'show()', 'console()', 'write()'], answer: 0, explanation: 'print() digunakan untuk menampilkan teks atau nilai.' },
		{ category: 'VARIABEL', prompt: 'Bagaimana cara sederhana menyimpan nama ke variabel di Python?', options: ['nama = "Budi"', 'nama == "Budi"', 'let nama = "Budi"', 'text nama: "Budi"'], answer: 0, explanation: 'Di Python, nilai diberikan ke variabel menggunakan tanda sama dengan.' },
		{ category: 'HITUNGAN', prompt: 'Berapa hasil dari 5 + 3?', options: ['6', '7', '8', '9'], answer: 2, explanation: '5 ditambah 3 hasilnya 8.' },
		{ category: 'TIPE DATA', prompt: 'Nilai True dan False termasuk jenis nilai apa?', options: ['Boolean', 'Gambar', 'Perulangan', 'Komentar'], answer: 0, explanation: 'Boolean memiliki dua nilai, yaitu True dan False.' },
		{ category: 'KONDISI', prompt: 'Kata if digunakan untuk apa?', options: ['Membuat kondisi', 'Mencetak kertas', 'Menghapus program', 'Membuka browser'], answer: 0, explanation: 'if menjalankan kode ketika suatu kondisi terpenuhi.' },
		{ category: 'PERULANGAN', prompt: 'Perintah apa yang bisa digunakan untuk mengulang kode di Python?', options: ['for', 'echo', 'class', 'input'], answer: 0, explanation: 'for dapat digunakan untuk menjalankan kode berulang kali.' },
		{ category: 'LIST', prompt: 'Tanda apa yang digunakan untuk membuat list sederhana di Python?', options: ['[ ]', '( )', '{ }', '< >'], answer: 0, explanation: 'List Python ditulis dengan tanda kurung siku, seperti [1, 2, 3].' },
		{ category: 'KOMENTAR', prompt: 'Tanda apa yang memulai komentar satu baris di Python?', options: ['#', '//', '<!--', '**'], answer: 0, explanation: 'Teks setelah tanda # pada baris tersebut dianggap sebagai komentar.' }
	],
	Java: [
		{ category: 'DASAR', prompt: 'Perintah apa yang biasa dipakai untuk menampilkan teks di Java?', options: ['System.out.println()', 'console.log()', 'print.line()', 'echo()'], answer: 0, explanation: 'System.out.println() menampilkan teks dan pindah ke baris berikutnya.' },
		{ category: 'VARIABEL', prompt: 'Kata int digunakan untuk menyimpan jenis nilai apa?', options: ['Bilangan bulat', 'Gambar', 'Kalimat panjang', 'Warna'], answer: 0, explanation: 'int adalah tipe data untuk bilangan bulat.' },
		{ category: 'HITUNGAN', prompt: 'Berapa hasil dari 5 + 3?', options: ['6', '7', '8', '9'], answer: 2, explanation: '5 ditambah 3 hasilnya 8.' },
		{ category: 'TIPE DATA', prompt: 'Nilai true dan false menggunakan tipe data apa di Java?', options: ['boolean', 'int', 'String', 'char'], answer: 0, explanation: 'boolean digunakan untuk nilai benar atau salah.' },
		{ category: 'KONDISI', prompt: 'Kata if digunakan untuk apa?', options: ['Memeriksa kondisi', 'Membuat gambar', 'Menutup program', 'Mengganti nama file'], answer: 0, explanation: 'if menjalankan kode jika kondisi yang diperiksa benar.' },
		{ category: 'PERULANGAN', prompt: 'Perintah apa yang bisa digunakan untuk mengulang kode?', options: ['for', 'say', 'show', 'name'], answer: 0, explanation: 'for adalah salah satu bentuk perulangan di Java.' },
		{ category: 'ARRAY', prompt: 'Indeks pertama pada array Java dimulai dari angka berapa?', options: ['0', '1', '2', '10'], answer: 0, explanation: 'Indeks array Java dimulai dari 0.' },
		{ category: 'KOMENTAR', prompt: 'Tanda apa yang memulai komentar satu baris di Java?', options: ['//', '#', '<!--', '**'], answer: 0, explanation: 'Teks setelah // pada baris tersebut dianggap sebagai komentar.' }
	],
	'C++': [
		{ category: 'DASAR', prompt: 'Perintah apa yang biasa dipakai untuk menampilkan teks di C++?', options: ['cout', 'print()', 'console.log()', 'show()'], answer: 0, explanation: 'cout digunakan untuk mengirim teks ke layar.' },
		{ category: 'VARIABEL', prompt: 'Kata int digunakan untuk menyimpan jenis nilai apa?', options: ['Bilangan bulat', 'Foto', 'Warna', 'Suara'], answer: 0, explanation: 'int adalah tipe data untuk bilangan bulat.' },
		{ category: 'HITUNGAN', prompt: 'Berapa hasil dari 5 + 3?', options: ['6', '7', '8', '9'], answer: 2, explanation: '5 ditambah 3 hasilnya 8.' },
		{ category: 'TEKS', prompt: 'Tipe data string biasanya digunakan untuk menyimpan apa?', options: ['Teks', 'Bilangan bulat saja', 'Kondisi benar atau salah', 'Perulangan'], answer: 0, explanation: 'string digunakan untuk menyimpan kumpulan karakter atau teks.' },
		{ category: 'KONDISI', prompt: 'Kata if digunakan untuk apa?', options: ['Memeriksa kondisi', 'Menampilkan video', 'Menyimpan gambar', 'Menghapus komputer'], answer: 0, explanation: 'if menjalankan kode jika kondisi yang diperiksa benar.' },
		{ category: 'PERULANGAN', prompt: 'Perintah apa yang bisa digunakan untuk mengulang kode?', options: ['for', 'say', 'echo', 'title'], answer: 0, explanation: 'for adalah salah satu bentuk perulangan di C++.' },
		{ category: 'ARRAY', prompt: 'Indeks pertama array di C++ dimulai dari angka berapa?', options: ['0', '1', '2', '10'], answer: 0, explanation: 'Indeks array C++ dimulai dari 0.' },
		{ category: 'KOMENTAR', prompt: 'Tanda apa yang memulai komentar satu baris di C++?', options: ['//', '#', '<!--', '**'], answer: 0, explanation: 'Teks setelah // pada baris tersebut dianggap sebagai komentar.' }
	],
	PHP: [
		{ category: 'DASAR', prompt: 'Perintah apa yang bisa digunakan untuk menampilkan teks di PHP?', options: ['echo', 'console.log()', 'show()', 'cout'], answer: 0, explanation: 'echo digunakan untuk menampilkan teks atau nilai.' },
		{ category: 'VARIABEL', prompt: 'Dengan tanda apa nama variabel PHP biasanya dimulai?', options: ['$', '#', '@', '&'], answer: 0, explanation: 'Nama variabel PHP dimulai dengan tanda dolar, misalnya $nama.' },
		{ category: 'HITUNGAN', prompt: 'Berapa hasil dari 5 + 3?', options: ['6', '7', '8', '9'], answer: 2, explanation: '5 ditambah 3 hasilnya 8.' },
		{ category: 'TEKS', prompt: 'Tipe data string digunakan untuk menyimpan apa?', options: ['Teks', 'Gambar saja', 'Perulangan', 'Kondisi'], answer: 0, explanation: 'String adalah tipe data untuk teks.' },
		{ category: 'KONDISI', prompt: 'Kata if digunakan untuk apa?', options: ['Memeriksa kondisi', 'Mengubah warna layar', 'Membuka komputer', 'Menghapus internet'], answer: 0, explanation: 'if menjalankan kode jika kondisi yang diperiksa benar.' },
		{ category: 'PERULANGAN', prompt: 'Perintah apa yang bisa digunakan untuk mengulang kode di PHP?', options: ['for', 'say', 'title', 'text'], answer: 0, explanation: 'for dapat digunakan untuk membuat perulangan.' },
		{ category: 'ARRAY', prompt: 'Array biasanya digunakan untuk menyimpan apa?', options: ['Beberapa nilai', 'Satu gambar saja', 'Nama file program', 'Perintah untuk berhenti'], answer: 0, explanation: 'Array dapat menyimpan beberapa nilai dalam satu variabel.' },
		{ category: 'KOMENTAR', prompt: 'Tanda apa yang bisa memulai komentar satu baris di PHP?', options: ['//', '<!--', '**', '%%'], answer: 0, explanation: 'Tanda // digunakan untuk komentar satu baris di PHP.' }
	],
	Lainnya: [
		{ category: 'DASAR', prompt: 'Dalam program, variabel biasanya digunakan untuk apa?', options: ['Menyimpan nilai', 'Membersihkan layar', 'Mematikan komputer', 'Membuka aplikasi musik'], answer: 0, explanation: 'Variabel menyimpan nilai yang bisa digunakan oleh program.' },
		{ category: 'TEKS', prompt: 'Apa nama jenis data untuk menyimpan kata atau kalimat?', options: ['String', 'Loop', 'Condition', 'Button'], answer: 0, explanation: 'String adalah jenis data yang berisi teks.' },
		{ category: 'HITUNGAN', prompt: 'Berapa hasil dari 5 + 3?', options: ['6', '7', '8', '9'], answer: 2, explanation: '5 ditambah 3 hasilnya 8.' },
		{ category: 'KONDISI', prompt: 'Apa kegunaan kondisi if dalam program?', options: ['Memilih tindakan berdasarkan syarat', 'Mengganti keyboard', 'Menghapus semua file', 'Menambah ukuran layar'], answer: 0, explanation: 'if membantu program memilih tindakan berdasarkan suatu syarat.' },
		{ category: 'PERULANGAN', prompt: 'Apa kegunaan perulangan dalam program?', options: ['Menjalankan instruksi beberapa kali', 'Mengubah program menjadi gambar', 'Menghapus variabel', 'Mematikan layar'], answer: 0, explanation: 'Perulangan menjalankan instruksi yang sama beberapa kali.' },
		{ category: 'KUMPULAN DATA', prompt: 'Struktur data apa yang biasa dipakai untuk menyimpan beberapa nilai berurutan?', options: ['Array', 'Komentar', 'Kondisi', 'Tombol'], answer: 0, explanation: 'Array dapat menyimpan beberapa nilai dalam satu kumpulan.' },
		{ category: 'BOOLEAN', prompt: 'Nilai true dan false biasa digunakan untuk menyatakan apa?', options: ['Benar atau salah', 'Nama orang', 'Warna teks', 'Jumlah halaman'], answer: 0, explanation: 'Nilai boolean menyatakan benar atau salah.' },
		{ category: 'KOMENTAR', prompt: 'Apa kegunaan komentar di dalam kode?', options: ['Memberi catatan untuk pembaca kode', 'Menjalankan komputer lebih cepat', 'Menghapus program', 'Mengganti bahasa komputer'], answer: 0, explanation: 'Komentar adalah catatan untuk membantu orang memahami kode.' }
	]
};

let questions = questionSets.JavaScript;

const STORAGE_KEY = 'cube-club-high-score';
const PROFILE_STORAGE_KEY = 'quizzapp-player-profile';
const THEME_STORAGE_KEY = 'quizzapp-theme';
const app = document.querySelector('#app');
const screens = [...document.querySelectorAll('[data-screen]')];
const themeButton = document.querySelector('#theme-toggle');
const themeIcon = document.querySelector('#theme-icon');
const playerForm = document.querySelector('#player-form');
const playerNameInput = document.querySelector('#player-name');
const programmingLanguageSelect = document.querySelector('#programming-language');
const highScoreElement = document.querySelector('#high-score');
const questionCounter = document.querySelector('#question-counter');
const playerInfo = document.querySelector('#player-info');
const questionCategory = document.querySelector('#question-category');
const questionText = document.querySelector('#question-text');
const answerList = document.querySelector('#answer-list');
const answerFeedback = document.querySelector('#answer-feedback');
const currentScoreElement = document.querySelector('#current-score');
const progressTrack = document.querySelector('.progress-track');
const progressFill = document.querySelector('#progress-fill');
const finalScoreElement = document.querySelector('#final-score');
const correctCountElement = document.querySelector('#correct-count');
const wrongCountElement = document.querySelector('#wrong-count');
const resultTitle = document.querySelector('#result-title');
const resultCopy = document.querySelector('#result-copy');
const resultKicker = document.querySelector('#result-kicker');
const resultHighScore = document.querySelector('#result-high-score');

let currentQuestion = 0;
let score = 0;
let answered = false;
let highScore = readHighScore();
let player = readPlayerProfile();

function readSavedTheme() {
	try {
		return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
	} catch {
		return 'light';
	}
}

function setTheme(theme) {
	const isDark = theme === 'dark';
	const label = isDark ? 'Aktifkan mode siang' : 'Aktifkan mode malam';
	document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
	themeIcon.textContent = isDark ? '☀' : '☾';
	themeButton.setAttribute('aria-label', label);
	themeButton.title = label;

	try {
		localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
	} catch {
		// The selected theme still applies until the page is closed.
	}
}

function readHighScore() {
	try {
		const savedScore = Number(localStorage.getItem(STORAGE_KEY));
		return Number.isInteger(savedScore) && savedScore >= 0 && savedScore <= questions.length ? savedScore : 0;
	} catch {
		return 0;
	}
}
	themeButton.addEventListener('click', () => {
		const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
		setTheme(nextTheme);
	});

	setTheme(readSavedTheme());

function saveHighScore(value) {
	try {
		localStorage.setItem(STORAGE_KEY, String(value));
	} catch {
		// The current run still works when browser storage is unavailable.
	}
}

function readPlayerProfile() {
	try {
		const savedPlayer = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY));
		if (savedPlayer && typeof savedPlayer.name === 'string' && typeof savedPlayer.language === 'string') {
			return savedPlayer;
		}
	} catch {
		return { name: '', language: '' };
	}
	return { name: '', language: '' };
}

function savePlayerProfile() {
	try {
		localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(player));
	} catch {
		// The quiz still works when browser storage is unavailable.
	}
}

function restorePlayerProfile() {
	playerNameInput.value = player.name;
	if ([...programmingLanguageSelect.options].some((option) => option.value === player.language)) {
		programmingLanguageSelect.value = player.language;
	}
}

function showScreen(name) {
	screens.forEach((screen) => {
		screen.hidden = screen.dataset.screen !== name;
	});
	app.dataset.view = name;
}

function updateHighScore() {
	highScoreElement.textContent = '';
	highScoreElement.append(document.createTextNode(String(highScore)));
	const total = document.createElement('span');
	total.textContent = ` / ${questions.length}`;
	highScoreElement.append(total);
}

function startQuiz() {
	currentQuestion = 0;
	score = 0;
	answered = false;
	playerInfo.textContent = `${player.name} · ${player.language}`;
	currentScoreElement.textContent = String(score);
	showScreen('quiz');
	renderQuestion();
}

function startQuizWithPlayer() {
	const name = playerNameInput.value.trim();
	if (!name) {
		playerNameInput.value = '';
		playerNameInput.reportValidity();
		return;
	}

	player = { name, language: programmingLanguageSelect.value };
	questions = questionSets[player.language] || questionSets.Lainnya;
	savePlayerProfile();
	startQuiz();
}

function renderQuestion() {
	const question = questions[currentQuestion];
	questionCounter.textContent = `${String(currentQuestion + 1).padStart(2, '0')} / ${String(questions.length).padStart(2, '0')}`;
	questionCategory.textContent = question.category;
	questionText.textContent = question.prompt;
	answerFeedback.textContent = '';
	progressTrack.setAttribute('aria-valuenow', String(currentQuestion));
	progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
	answerList.replaceChildren();

	question.options.forEach((option, index) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = 'answer-option';
		button.dataset.action = 'answer';
		button.dataset.answerIndex = String(index);

		const letter = document.createElement('span');
		letter.className = 'answer-letter';
		letter.textContent = String.fromCharCode(65 + index);

		const label = document.createElement('span');
		label.className = 'answer-label';
		label.textContent = option;

		const marker = document.createElement('span');
		marker.className = 'answer-marker';
		marker.setAttribute('aria-hidden', 'true');
		marker.textContent = '↗';

		button.append(letter, label, marker);
		answerList.append(button);
	});
}

function selectAnswer(selectedIndex) {
	if (answered) return;
	answered = true;

	const question = questions[currentQuestion];
	const isCorrect = selectedIndex === question.answer;
	if (isCorrect) score += 1;
	currentScoreElement.textContent = String(score);

	answerList.querySelectorAll('.answer-option').forEach((button, index) => {
		button.disabled = true;
		if (index === question.answer) button.classList.add('is-correct');
		if (index === selectedIndex && !isCorrect) button.classList.add('is-incorrect');
	});

	answerFeedback.textContent = `${isCorrect ? 'TEPAT.' : 'BELUM TEPAT.'} ${question.explanation}`;
	const nextButton = document.createElement('button');
	nextButton.type = 'button';
	nextButton.className = 'next-button';
	nextButton.dataset.action = currentQuestion === questions.length - 1 ? 'finish' : 'next';
	nextButton.textContent = currentQuestion === questions.length - 1 ? 'Lihat hasil' : 'Pertanyaan berikutnya';
	answerFeedback.append(document.createTextNode(' '), nextButton);
}

function nextQuestion() {
	currentQuestion += 1;
	answered = false;
	renderQuestion();
	questionText.focus?.();
}

function finishQuiz() {
	if (score > highScore) {
		highScore = score;
		saveHighScore(highScore);
		resultKicker.textContent = 'REKOR BARU';
	} else {
		resultKicker.textContent = 'HASIL AKHIR';
	}

	finalScoreElement.textContent = String(score);
	correctCountElement.textContent = String(score);
	wrongCountElement.textContent = String(questions.length - score);
	resultTitle.textContent = score === questions.length ? 'Sempurna!' : score >= 5 ? 'Kerja bagus.' : 'Terus berlatih.';
	resultCopy.textContent = score === questions.length
		? `${player.name}, Yayyy!! semua jawabanmu tepat. Kamu benar-benar menguasai Quizz ini. Bangga dech🫶.`
		: `${player.name}, kamu menjawab ${score} dari ${questions.length} pertanyaan dengan benar. Satu putaran lagi bisa jadi rekor baru.`;
	resultHighScore.textContent = `${highScore} / ${questions.length}`;
	updateHighScore();
	showScreen('result');
}

app.addEventListener('submit', (event) => {
	if (event.target !== playerForm) return;
	event.preventDefault();
	startQuizWithPlayer();
});

app.addEventListener('click', (event) => {
	const button = event.target.closest('button[data-action]');
	if (!button || !app.contains(button)) return;

	switch (button.dataset.action) {
		case 'restart':
			startQuiz();
			break;
		case 'answer':
			selectAnswer(Number(button.dataset.answerIndex));
			break;
		case 'next':
			nextQuestion();
			break;
		case 'finish':
			finishQuiz();
			break;
		case 'home':
			showScreen('home');
			break;
		case 'quit':
			showScreen('home');
			break;
	}
});

restorePlayerProfile();
updateHighScore();
