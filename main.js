import './src/scss/main.scss';

const shareDataMobile = document.querySelector('.share-data__mobile');
const shareDataQrCode = document.querySelector('.share-data__QR-code');

function handleResize() {
    if (window.innerWidth <= 768) {
        shareDataMobile.classList.remove('visually-hidden');
        shareDataQrCode.classList.add('visually-hidden');
    } else {
        shareDataMobile.classList.add('visually-hidden');
        shareDataQrCode.classList.remove('visually-hidden');
    }
}

handleResize();

window.addEventListener('resize', handleResize);


// Ес че это писал не я
document.addEventListener('DOMContentLoaded', function () {
    // Кнопка добавления контакта
    const saveContactButton = document.getElementById('saveContact');
    saveContactButton.addEventListener('click', function () {
        // Пример создания виртуальной визитки (vCard) для добавления контакта
        const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Иван Иванов\nTEL:+1234567890\nEMAIL:example@mail.com\nEND:VCARD`;
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'contact.vcf';
        link.click();
    });

    // Кнопка написания письма
    const writeEmailButton = document.getElementById('writeEmail');
    writeEmailButton.addEventListener('click', function () {
        const email = 'example@mail.com';
        const subject = 'Тема письма';
        const body = 'Здравствуйте!';
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });

    // Кнопка для звонка
    const makeCallButton = document.getElementById('makeCall');
    makeCallButton.addEventListener('click', function () {
        const phoneNumber = '+1234567890';
        window.location.href = `tel:${phoneNumber}`;
    });

    // Кнопка для поделиться профилем
    const shareProfileButton = document.getElementById('shareProfile');
    shareProfileButton.addEventListener('click', function () {
        if (navigator.share) {
            navigator.share({
                title: 'Профиль Ивана Иванова',
                text: 'Посмотрите профиль Ивана Иванова',
                url: window.location.href,
            }).catch((error) => console.error('Ошибка при использовании Web Share API:', error));
        } else {
            // Альтернативное поведение для браузеров, которые не поддерживают Web Share API
            alert('Ваш браузер не поддерживает функцию "Поделиться". Скопируйте ссылку вручную: ' + window.location.href);
        }
    });
});


