'use client';

import React, { useState } from 'react';

const ClanAutoSearchRU = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    idDoc: '',
    country: 'Spain',
    city: '',
    phone: '',
    email: '',
    yearFrom: '',
    yearTo: '',
    kmMax: '100000',
    excludedColor: 'None',
    gearbox: 'Automatic',
    bodyType: 'SUV',
    condition: 'Любое',
    regCountry: 'Spain',
    priceFrom: '',
    priceTo: '',
    additionalInfo: ''
  });

  const [selectedModels, setSelectedModels] = useState([]);
  const [currentMake, setCurrentMake] = useState('');
  const [currentModel, setCurrentModel] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const [agree, setAgree] = useState(false);

  const carData = {
    Audi: ['A1','A2','A3','A4','A5','A6','A7','A8','Q2','Q3','Q4 e-tron','Q5','Q6 e-tron','Q7','Q8','TT','R8'],
    BMW: ['1 Series','2 Series','3 Series','4 Series','5 Series','6 Series','7 Series','8 Series','X1','X2','X3','X4','X5','X6','X7','XM','Z4','i4','i5','i7','iX'],
    'Mercedes-Benz': ['A-Class','B-Class','C-Class','E-Class','S-Class','CLA','CLS','GLA','GLB','GLC','GLE','GLS','G-Class','V-Class','Sprinter'],
    Volkswagen: ['Polo','Golf','ID.3','ID.4','ID.5','ID.7','Passat','Arteon','T-Cross','T-Roc','Tiguan','Touareg','Touran','Caddy','Multivan','Crafter'],
    Citroën: ['C1','C3','C3 Aircross','C4','C4 X','C5 X','C5 Aircross','Berlingo','Jumpy'],
    'Land Rover': ['Range Rover','RR Sport','RR Velar','RR Evoque','Defender','Discovery','Discovery Sport'],
    Mazda: ['Mazda2','Mazda3','Mazda6','CX-30','MX-30','CX-5','CX-60','MX-5'],
    Renault: ['Clio','Captur','Megane','Austral','Arkana','Scenic','Zoe','Kangoo','Trafic'],
    Ford: ['Fiesta','Focus','Mondeo','Mustang','Puma','Kuga','Explorer','Ranger','Transit'],
    Hyundai: ['i10','i20','i30','IONIQ 5','IONIQ 6','Kona','Tucson','Santa Fe'],
    Kia: ['Picanto','Rio','Ceed','XCeed','Niro','EV6','EV9','Sportage','Sorento'],
    Toyota: ['Yaris','Corolla','Camry','Prius','C-HR','RAV4','Land Cruiser','Hilux'],
    Skoda: ['Fabia','Scala','Octavia','Superb','Kamiq','Karoq','Kodiaq','Enyaq'],
    SEAT: ['Ibiza','Leon','Arona','Ateca','Tarraco'],
    Peugeot: ['208','308','408','508','2008','3008','5008','Rifter','Expert'],
    Opel: ['Corsa','Astra','Mokka','Crossland','Grandland','Insignia','Vivaro'],
    Tesla: ['Model 3','Model Y','Model S','Model X'],
    Porsche: ['718','911','Taycan','Panamera','Macan','Cayenne'],
    Cupra: ['Born','Leon','Formentor','Ateca'],
    Honda: ['Civic','Jazz','HR-V','CR-V'],
    Jaguar: ['XE','XF','F-Pace','I-Pace'],
    Lexus: ['UX','NX','RX','ES'],
    Jeep: ['Renegade','Compass','Wrangler'],
    Mini: ['Cooper','Clubman','Countryman'],
    Smart: ['Fortwo','#1','#3'],
    Mitsubishi: ['Space Star','ASX','Eclipse Cross','L200'],
    Suzuki: ['Swift','Vitara','Jimny'],
    Fiat: ['500','Panda','Tipo','Ducato']
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const addModel = (model) => {
    if (model && selectedModels.length < 5 && !selectedModels.includes(model)) {
      setSelectedModels((prev) => [...prev, model]);
    }
  };

  const removeModel = (index) => {
    setSelectedModels((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMakeChange = (e) => {
    const make = e.target.value;
    setCurrentMake(make);
    setShowCustomInput(make === 'Other');
  };

  const handleModelChange = (e) => {
    const model = e.target.value;
    if (model === 'Other_Model') {
      setShowCustomInput(true);
    } else if (model) {
      addModel(model);
      setCurrentModel('');
    }
  };

  const handleCustomAdd = () => {
    if (customModel.trim()) {
      addModel(customModel.trim());
      setCustomModel('');
      setShowCustomInput(false);
    }
  };

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getLocaleFromPath = () => {
    if (typeof window === 'undefined') return 'ru';
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    return seg || 'ru';
  };

  const isValid = () => {
    if (!formData.clientName?.trim()) return false;
    if (!formData.idDoc?.trim()) return false;
    if (!formData.country?.trim()) return false;
    if (!formData.city?.trim()) return false;
    if (!formData.phone?.trim()) return false;
    if (!formData.email?.trim()) return false;

    if (!formData.yearFrom) return false;
    if (!formData.yearTo) return false;
    if (!formData.priceFrom) return false;
    if (!formData.priceTo) return false;

    // Марка обязательна всегда.
    if (!currentMake || !currentMake.trim()) return false;

    // Если выбрано "Другая", то обязательно нужно указать свой вариант.
    if (currentMake === 'Other') {
      const typed = customModel?.trim().length > 0;
      const added = selectedModels.length > 0;
      if (!typed && !added) return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    if (!agree) {
      setError('Пожалуйста, подтвердите условия перед отправкой заявки.');
      return;
    }
    if (!isValid()) {
      setError('Пожалуйста, заполните все обязательные поля, отмеченные *.' );
      return;
    }
    setError('');

    const modelsForMsg = [...selectedModels];
    const customTrim = customModel?.trim();
    if (currentMake === 'Other' && customTrim && !modelsForMsg.includes(customTrim)) {
      modelsForMsg.push(customTrim);
    }
    const modelsLine = modelsForMsg.length ? modelsForMsg.join(', ') : currentMake;

    const msg = `🚀 НОВАЯ ЗАЯВКА AUTOEXPERT EU\n` +
      `👤 Клиент: ${formData.clientName}\n` +
      `🆔 Документ: ${formData.idDoc}\n` +
      `📍 Локация: ${formData.country}, ${formData.city}\n` +
      `📞 WA: ${formData.phone}\n` +
      `✉️ Email: ${formData.email}\n` +
      `🚗 Модели: ${modelsLine}\n` +
      `⚙️ КПП: ${formData.gearbox}\n` +
      `🏗 Кузов: ${formData.bodyType}\n` +
      `🛣 Состояние: ${formData.condition}\n` +
      `🇪🇸 Регистрация: ${formData.regCountry}\n` +
      `📅 Год: ${formData.yearFrom}-${formData.yearTo}\n` +
      `💰 Бюджет: ${formData.priceFrom}-${formData.priceTo}€\n` +
      `📝 Дополнительно: ${formData.additionalInfo}`;

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.clientName,
          phone: formData.phone,
          email: formData.email,
          subject: 'Автоподбор — заявка',
          message: msg
        })
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSuccess('Заявка отправлена');
      setTimeout(() => {
        const locale = getLocaleFromPath();
        window.location.href = `/${locale}/avtopodbor`;
      }, 1000);
    } catch (err) {
      setError('Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const years = Array.from({ length: 2026 - 2010 + 1 }, (_, i) => 2026 - i);
  const mileages = Array.from({ length: 50 }, (_, i) => (i + 1) * 5000);

  const prices = [];
  for (let i = 5000; i <= 10000; i += 5000) prices.push(i);
  for (let i = 11000; i <= 40000; i += 1000) prices.push(i);
  for (let i = 45000; i <= 250000; i += 5000) prices.push(i);

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: '#fff',
        padding: '25px',
        border: '1px solid #eee',
        fontFamily: 'Segoe UI, Roboto, sans-serif'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <p style={{ marginTop: '5px', color: '#666' }}>
          <b>Анкета для подбора автомобиля</b>
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>

        <h2 style={sectionTitleStyle}>1. Данные клиента</h2>
        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              ФИО <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" id="clientName" value={formData.clientName} onChange={handleInputChange} style={inputStyle} required />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              NIE / DNI / Паспорт <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="idDoc"
              value={formData.idDoc}
              onChange={handleInputChange}
              minLength={9}
              maxLength={20}
              placeholder="например, Y1234567W"
              style={inputStyle}
              required
            />
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Страна проживания <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="country" value={formData.country} onChange={handleInputChange} style={inputStyle} required>
              <option value="">Выберите из списка</option>
              <option value="Albania">Albania</option>
              <option value="England">England</option>
              <option value="Germany">Germany</option>
              <option value="Spain">Spain</option>
              <option value="Poland">Poland</option>
              <option value="France">France</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Город <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="text" id="city" value={formData.city} onChange={handleInputChange} style={inputStyle} required />
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              WhatsApp / Телефон <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="+34..." style={inputStyle} required />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input type="email" id="email" value={formData.email} onChange={handleInputChange} style={inputStyle} required />
          </div>
        </div>

        <h2 style={sectionTitleStyle}>2. Параметры автомобиля</h2>
        <div style={groupStyle}>
          <label style={labelStyle}>
            Выберите до 5 моделей (максимум 5) <span style={{ color: 'red' }}>*</span>
          </label>
          <div style={gridStyle}>
            <select value={currentMake} onChange={handleMakeChange} style={inputStyle} required>
              <option value="">Выберите марку</option>
              {Object.keys(carData)
                .sort()
                .map((make) => (
                  <option key={make} value={make}>{make}</option>
                ))}
              <option value="Other">Другая</option>
            </select>
            <select value={currentModel} onChange={handleModelChange} style={inputStyle}>
              <option value="">Выберите модель</option>
              {currentMake && currentMake !== 'Other' &&
                carData[currentMake]?.map((model) => (
                  <option key={model} value={`${currentMake} ${model}`}>{model}</option>
                ))}
              {currentMake && currentMake !== '' && <option value="Other_Model">Другая</option>}
            </select>
          </div>
          <div style={tagBoxStyle}>
            {selectedModels.map((m, i) => (
              <div key={i} style={tagStyle}>
                {m}
                <span style={{ cursor: 'pointer', marginLeft: '8px' }} onClick={() => removeModel(i)}>×</span>
              </div>
            ))}
          </div>
        </div>

        {showCustomInput && (
          <div style={{ background: '#f0f4f8', padding: '15px', marginBottom: '15px', borderRadius: '4px' }}>
            <label style={labelStyle}><b>Ваш вариант:</b></label>
            <input
              type="text"
              value={customModel}
              onChange={(e) => setCustomModel(e.target.value)}
              placeholder="Введите марку и модель вручную"
              style={inputStyle}
            />
            <button type="button" onClick={handleCustomAdd} style={customBtnStyle}>Добавить</button>
          </div>
        )}

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Год выпуска (от) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="yearFrom" value={formData.yearFrom} onChange={handleInputChange} style={inputStyle}>
              <option value="">Выберите год</option>
              {years.map((y) => (<option key={y} value={y}>{y}</option>))}
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Год выпуска (до) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="yearTo" value={formData.yearTo} onChange={handleInputChange} style={inputStyle}>
              <option value="">Выберите год</option>
              {years.map((y) => (<option key={y} value={y}>{y}</option>))}
            </select>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Максимальный пробег (км)</label>
            <select id="kmMax" value={formData.kmMax} onChange={handleInputChange} style={inputStyle}>
              {mileages.map((k) => (<option key={k} value={k}>{k.toLocaleString('ru-RU')} km</option>))}
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Цвет (исключить)</label>
            <select id="excludedColor" value={formData.excludedColor} onChange={handleInputChange} style={inputStyle}>
              <option value="None">Не важно</option>
              <option value="White">Белый</option>
              <option value="Black">Чёрный</option>
              <option value="Red">Красный</option>
              <option value="Green">Зелёный</option>
              <option value="Blue">Синий</option>
              <option value="Silver Metallic">Серебристый металлик</option>
              <option value="Brown">Коричневый</option>
            </select>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Коробка передач</label>
            <select id="gearbox" value={formData.gearbox} onChange={handleInputChange} style={inputStyle}>
              <option value="Automatic">Автомат</option>
              <option value="Manual">Механика</option>
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Тип кузова</label>
            <select id="bodyType" value={formData.bodyType} onChange={handleInputChange} style={inputStyle}>
              <option value="SUV">SUV</option>
              <option value="Sedan">Седан</option>
              <option value="Hatchback">Хэтчбек</option>
              <option value="Station Wagon">Универсал</option>
              <option value="Coupe">Купе</option>
              <option value="Convertible">Кабриолет</option>
              <option value="Minivan">Минивэн</option>
              <option value="Truck">Пикап</option>
            </select>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Состояние</label>
            <select id="condition" value={formData.condition} onChange={handleInputChange} style={inputStyle}>
              <option value="Без повреждений">Без повреждений</option>
              <option value="С косметическими повреждениями">С косметическими повреждениями</option>
              <option value="С повреждениями, но на ходу">С повреждениями, но на ходу</option>
              <option value="Любое">Любое</option>
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Страна регистрации</label>
            <select id="regCountry" value={formData.regCountry} onChange={handleInputChange} style={inputStyle}>
              <option value="Spain">Испания</option>
              <option value="Any">Любая</option>
            </select>
          </div>
        </div>

        <h2 style={sectionTitleStyle}>3. Бюджет</h2>
        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Бюджет от (€) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="priceFrom" value={formData.priceFrom} onChange={handleInputChange} style={inputStyle}>
              <option value="">Выберите бюджет</option>
              {prices.map((p) => (<option key={p} value={p}>{p.toLocaleString('ru-RU')} €</option>))}
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Бюджет до (€) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="priceTo" value={formData.priceTo} onChange={handleInputChange} style={inputStyle}>
              <option value="">Выберите бюджет</option>
              {prices.map((p) => (<option key={p} value={p}>{p.toLocaleString('ru-RU')} €</option>))}
            </select>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label style={labelStyle}>Дополнительно (до 500 символов):</label>
          <textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            maxLength={500}
            placeholder="Пожелания по комплектации, опциям, и т.д."
            style={inputStyle}
          />
        </div>

        <div style={{ background: '#e3f2fd', padding: '10px', marginTop: '20px', borderRadius: '4px' }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />{' '}
          <span style={{ fontSize: '14px' }}>
            Подтверждаю, что понимаю, что указанный бюджет не включает налоги, аукционные сборы, транспорт и регистрацию, а также осознаю специфику покупки автомобиля через аукцион и возможные риски скрытых дефектов.
          </span>
        </div>

        <div style={{ marginTop: '18px', marginBottom: '8px', fontSize: '13px', color: '#555' }}>
          Заполните все обязательные поля, отмеченные{' '}
          <span style={{ color: 'red', fontSize: '16px', fontWeight: 700 }}>*</span>, поставьте отметку в поле "Подтверждаю", нажмите «Отправить заявку», и увидите уведомление об отправке.
        </div>

        {error ? (
          <div style={{ marginTop: 8 }}>
            <p style={{ color: '#b91c1c', margin: 0 }}>{error}</p>
          </div>
        ) : null}

        <button type="submit" style={submitBtnStyle} disabled={isSubmitting || !agree}>
          Отправить заявку
        </button>

        {success ? (
          <div
            style={{
              marginTop: '12px',
              background: '#f0fdf4',
              border: '1px solid #86efac',
              color: '#166534',
              padding: '10px 12px',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          >
            {success}
          </div>
        ) : null}
      </form>
    </div>
  );
};

const sectionTitleStyle = {
  color: '#003366',
  borderBottom: '2px solid #003366',
  paddingBottom: '10px',
  fontSize: '18px',
  textTransform: 'uppercase',
  marginTop: '25px'
};
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '15px',
  marginBottom: '15px'
};
const groupStyle = { display: 'flex', flexDirection: 'column' };
const labelStyle = { fontWeight: 'bold', marginBottom: '5px', fontSize: '14px' };
const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '15px'
};
const tagBoxStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '10px'
};
const tagStyle = {
  background: '#eef2ff',
  border: '1px solid #c7d2fe',
  padding: '6px 10px',
  borderRadius: '999px',
  fontSize: '13px'
};
const customBtnStyle = {
  marginTop: '10px',
  background: '#003366',
  color: '#fff',
  border: 'none',
  padding: '10px 14px',
  borderRadius: '6px',
  cursor: 'pointer'
};
const submitBtnStyle = {
  marginTop: '20px',
  width: '100%',
  background: '#003366',
  color: '#fff',
  border: 'none',
  padding: '14px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 700,
  boxShadow: '0 8px 18px rgba(0, 51, 102, 0.25)',
  cursor: 'pointer'
};

export default ClanAutoSearchRU;
