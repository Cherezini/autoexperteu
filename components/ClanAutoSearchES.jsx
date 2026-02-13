'use client';

import React, { useState } from 'react';

const ClanAutoSearchES = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    idDoc: '',
    country: 'España',
    city: '',
    phone: '',
    email: '',
    yearFrom: '',
    yearTo: '',
    kmMax: '100000',
    excludedColor: 'Ninguno',
    gearbox: 'Automático',
    bodyType: 'SUV',
    condition: 'Cualquiera',
    regCountry: 'España',
    priceFrom: '',
    priceTo: '',
    additionalInfo: ''
  });

  const [selectedModels, setSelectedModels] = useState([]);
  const [currentMake, setCurrentMake] = useState('');
  const [currentModel, setCurrentModel] = useState('');
  const [customModel, setCustomModel] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);

  const carData = {
    Audi: [
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'Q2',
      'Q3',
      'Q4 e-tron',
      'Q5',
      'Q6 e-tron',
      'Q7',
      'Q8',
      'TT',
      'R8'
    ],
    BMW: [
      '1 Series',
      '2 Series',
      '3 Series',
      '4 Series',
      '5 Series',
      '6 Series',
      '7 Series',
      '8 Series',
      'X1',
      'X2',
      'X3',
      'X4',
      'X5',
      'X6',
      'X7',
      'XM',
      'Z4',
      'i4',
      'i5',
      'i7',
      'iX'
    ],
    'Mercedes-Benz': [
      'A-Class',
      'B-Class',
      'C-Class',
      'E-Class',
      'S-Class',
      'CLA',
      'CLS',
      'GLA',
      'GLB',
      'GLC',
      'GLE',
      'GLS',
      'G-Class',
      'V-Class',
      'Sprinter'
    ],
    Volkswagen: [
      'Polo',
      'Golf',
      'ID.3',
      'ID.4',
      'ID.5',
      'ID.7',
      'Passat',
      'Arteon',
      'T-Cross',
      'T-Roc',
      'Tiguan',
      'Touareg',
      'Touran',
      'Caddy',
      'Multivan',
      'Crafter'
    ],
    Citroën: [
      'C1',
      'C3',
      'C3 Aircross',
      'C4',
      'C4 X',
      'C5 X',
      'C5 Aircross',
      'Berlingo',
      'Jumpy'
    ],
    'Land Rover': [
      'Range Rover',
      'RR Sport',
      'RR Velar',
      'RR Evoque',
      'Defender',
      'Discovery',
      'Discovery Sport'
    ],
    Mazda: ['Mazda2', 'Mazda3', 'Mazda6', 'CX-30', 'MX-30', 'CX-5', 'CX-60', 'MX-5'],
    Renault: ['Clio', 'Captur', 'Megane', 'Austral', 'Arkana', 'Scenic', 'Zoe', 'Kangoo', 'Trafic'],
    Ford: ['Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Puma', 'Kuga', 'Explorer', 'Ranger', 'Transit'],
    Hyundai: ['i10', 'i20', 'i30', 'IONIQ 5', 'IONIQ 6', 'Kona', 'Tucson', 'Santa Fe'],
    Kia: ['Picanto', 'Rio', 'Ceed', 'XCeed', 'Niro', 'EV6', 'EV9', 'Sportage', 'Sorento'],
    Toyota: ['Yaris', 'Corolla', 'Camry', 'Prius', 'C-HR', 'RAV4', 'Land Cruiser', 'Hilux'],
    Skoda: ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq'],
    SEAT: ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco'],
    Peugeot: ['208', '308', '408', '508', '2008', '3008', '5008', 'Rifter', 'Expert'],
    Opel: ['Corsa', 'Astra', 'Mokka', 'Crossland', 'Grandland', 'Insignia', 'Vivaro'],
    Tesla: ['Model 3', 'Model Y', 'Model S', 'Model X'],
    Porsche: ['718', '911', 'Taycan', 'Panamera', 'Macan', 'Cayenne'],
    Cupra: ['Born', 'Leon', 'Formentor', 'Ateca'],
    Honda: ['Civic', 'Jazz', 'HR-V', 'CR-V'],
    Jaguar: ['XE', 'XF', 'F-Pace', 'I-Pace'],
    Lexus: ['UX', 'NX', 'RX', 'ES'],
    Jeep: ['Renegade', 'Compass', 'Wrangler'],
    Mini: ['Cooper', 'Clubman', 'Countryman'],
    Smart: ['Fortwo', '#1', '#3'],
    Mitsubishi: ['Space Star', 'ASX', 'Eclipse Cross', 'L200'],
    Suzuki: ['Swift', 'Vitara', 'Jimny'],
    Fiat: ['500', 'Panda', 'Tipo', 'Ducato']
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

    // La marca es obligatoria.
    if (!currentMake || !currentMake.trim()) return false;

    // Si se elige "Otra", es obligatorio indicar el modelo manualmente.
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
      setError('Por favor, confirme las condiciones antes de enviar la solicitud.');
      return;
    }

    if (!isValid()) {
      setError('Por favor, complete todos los campos obligatorios marcados con * antes de enviar el formulario.');
      return;
    }

    setError('');

    const modelsForMsg = [...selectedModels];
    const customTrim = customModel?.trim();
    if (currentMake === 'Other' && customTrim && !modelsForMsg.includes(customTrim)) {
      modelsForMsg.push(customTrim);
    }
    const modelsLine = modelsForMsg.length ? modelsForMsg.join(', ') : currentMake;

    const msg =
      `🚀 NUEVA SOLICITUD AUTOEXPERT EU\n` +
      `👤 Cliente: ${formData.clientName}\n` +
      `🆔 Doc: ${formData.idDoc}\n` +
      `📍 Ubicación: ${formData.country}, ${formData.city}\n` +
      `📞 WA cliente: ${formData.phone}\n` +
      `✉️ Email: ${formData.email}\n` +
      `🚗 Vehículos: ${modelsLine}\n` +
      `⚙️ Caja: ${formData.gearbox}\n` +
      `🏗 Carrocería: ${formData.bodyType}\n` +
      `🛣 Estado: ${formData.condition}\n` +
      `🇪🇸 Registro: ${formData.regCountry}\n` +
      `📅 Año: ${formData.yearFrom}-${formData.yearTo}\n` +
      `💰 Presupuesto: ${formData.priceFrom}-${formData.priceTo}€\n` +
      `📝 Info: ${formData.additionalInfo}`;

    try {
      setIsSubmitting(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.clientName,
          phone: formData.phone,
          email: formData.email,
          subject: 'Autoselección — solicitud',
          message: msg
        })
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSuccess('Solicitud enviada');

      // Show success, then return to the autoselección page after 1 second
      setTimeout(() => {
        const locale = (window.location.pathname.split('/')[1] || 'es').trim();
        window.location.href = `/${locale}/avtopodbor`;
      }, 1000);
    } catch (err) {
      setError('No se pudo enviar la solicitud. Por favor, inténtelo de nuevo.');
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
          <b>Formulario de solicitud de vehículo</b>
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <h2 style={sectionTitleStyle}>1. Datos del cliente</h2>
        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Nombre y Apellidos <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              NIE / DNI / Pasaporte <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="idDoc"
              value={formData.idDoc}
              onChange={handleInputChange}
              minLength={9}
              maxLength={20}
              placeholder="por ejemplo, Y1234567W"
              style={inputStyle}
              required
            />
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              País de residencia <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              style={inputStyle}
              required
            >
              <option value="">Seleccione de la lista</option>
              <option value="Albania">Albania</option>
              <option value="England">Inglaterra</option>
              <option value="Germany">Alemania</option>
              <option value="España">España</option>
              <option value="Poland">Polonia</option>
              <option value="France">Francia</option>
              <option value="Switzerland">Suiza</option>
              <option value="Ukraine">Ucrania</option>
              <option value="Other">Otro</option>
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Ciudad <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              WhatsApp / Teléfono <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+34..."
              style={inputStyle}
              required
            />
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
          </div>
        </div>

        <h2 style={sectionTitleStyle}>2. Parámetros del vehículo</h2>
        <div style={groupStyle}>
          <label style={labelStyle}>
            Seleccione hasta 5 modelos (Máximo 5) <span style={{ color: 'red' }}>*</span>
          </label>
          <div style={gridStyle}>
            <select value={currentMake} onChange={handleMakeChange} style={inputStyle} required>
              <option value="">Seleccione marca</option>
              {Object.keys(carData)
                .sort()
                .map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              <option value="Other">Otra</option>
            </select>
            <select value={currentModel} onChange={handleModelChange} style={inputStyle}>
              <option value="">Seleccione modelo</option>
              {currentMake &&
                currentMake !== 'Other' &&
                carData[currentMake]?.map((model) => (
                  <option key={model} value={`${currentMake} ${model}`}>
                    {model}
                  </option>
                ))}
              {currentMake && currentMake !== '' && <option value="Other_Model">Otro</option>}
            </select>
          </div>
          <div style={tagBoxStyle}>
            {selectedModels.map((m, i) => (
              <div key={i} style={tagStyle}>
                {m}
                <span style={{ cursor: 'pointer', marginLeft: '8px' }} onClick={() => removeModel(i)}>
                  ×
                </span>
              </div>
            ))}
          </div>
        </div>

        {showCustomInput && (
          <div style={{ background: '#f0f4f8', padding: '15px', marginBottom: '15px', borderRadius: '4px' }}>
            <label style={labelStyle}>
              <b>Su variante:</b>
            </label>
            <input
              type="text"
              value={customModel}
              onChange={(e) => setCustomModel(e.target.value)}
              placeholder="Introduzca marca y modelo manualmente"
              style={inputStyle}
            />
            <button type="button" onClick={handleCustomAdd} style={customBtnStyle}>
              Añadir a la lista
            </button>
          </div>
        )}

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Año de fabricación (desde) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="yearFrom" value={formData.yearFrom} onChange={handleInputChange} style={inputStyle}>
              <option value="">Seleccione año</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Año de fabricación (hasta) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="yearTo" value={formData.yearTo} onChange={handleInputChange} style={inputStyle}>
              <option value="">Seleccione año</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Kilometraje máximo (km)</label>
            <select id="kmMax" value={formData.kmMax} onChange={handleInputChange} style={inputStyle}>
              {mileages.map((k) => (
                <option key={k} value={k}>
                  {k.toLocaleString('es-ES')} km
                </option>
              ))}
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Color (excluir)</label>
            <select id="excludedColor" value={formData.excludedColor} onChange={handleInputChange} style={inputStyle}>
              <option value="Ninguno">Ninguno</option>
              <option value="Blanco">Blanco</option>
              <option value="Negro">Negro</option>
              <option value="Rojo">Rojo</option>
              <option value="Verde">Verde</option>
              <option value="Azul">Azul</option>
              <option value="Plata Metalizado">Plata Metalizado</option>
              <option value="Marrón">Marrón</option>
            </select>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Caja de cambios</label>
            <select id="gearbox" value={formData.gearbox} onChange={handleInputChange} style={inputStyle}>
              <option value="Automático">Automático</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>Tipo de carrocería</label>
            <select id="bodyType" value={formData.bodyType} onChange={handleInputChange} style={inputStyle}>
              <option value="SUV">SUV</option>
              <option value="Sedán">Sedán</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Familiar">Familiar</option>
              <option value="Coupé">Coupé</option>
              <option value="Cabrio">Cabrio</option>
              <option value="Minivan">Minivan</option>
              <option value="Pick-up">Pick-up</option>
            </select>
          </div>
        </div>

        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>Estado</label>
            <select id="condition" value={formData.condition} onChange={handleInputChange} style={inputStyle}>
              <option value="Sin daños">Sin daños</option>
              <option value="Con daños cosméticos">Con daños cosméticos</option>
              <option value="Con daños, pero en marcha">Con daños, pero en marcha</option>
              <option value="Cualquiera">Cualquiera</option>
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>País de matriculación</label>
            <select id="regCountry" value={formData.regCountry} onChange={handleInputChange} style={inputStyle}>
              <option value="España">España</option>
              <option value="Cualquiera">Cualquiera</option>
            </select>
          </div>
        </div>

        <h2 style={sectionTitleStyle}>3. Presupuesto</h2>
        <div style={gridStyle}>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Presupuesto desde (€) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="priceFrom" value={formData.priceFrom} onChange={handleInputChange} style={inputStyle}>
              <option value="">Seleccione presupuesto</option>
              {prices.map((p) => (
                <option key={p} value={p}>
                  {p.toLocaleString('es-ES')} €
                </option>
              ))}
            </select>
          </div>
          <div style={groupStyle}>
            <label style={labelStyle}>
              Presupuesto hasta (€) <span style={{ color: 'red' }}>*</span>
            </label>
            <select id="priceTo" value={formData.priceTo} onChange={handleInputChange} style={inputStyle}>
              <option value="">Seleccione presupuesto</option>
              {prices.map((p) => (
                <option key={p} value={p}>
                  {p.toLocaleString('es-ES')} €
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label style={labelStyle}>Información adicional (máx. 500 caracteres):</label>
          <textarea
            id="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={4}
            maxLength={500}
            placeholder="Sus preferencias sobre equipamiento..."
            style={inputStyle}
          />
        </div>

        <div
          style={{
            background: '#e3f2fd',
            padding: '10px',
            marginTop: '20px',
            borderRadius: '4px'
          }}
        >
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />{' '}
          <span style={{ fontSize: '14px' }}>
            Confirmo que entiendo que el presupuesto indicado no incluye impuestos, tasas de subasta, transporte ni
            matriculación, y que conozco las particularidades de la compra de un coche a través de subasta y los posibles
            riesgos de defectos ocultos.
          </span>
        </div>

        <div style={{ marginTop: '18px', marginBottom: '8px', fontSize: '13px', color: '#555' }}>
          Rellene todos los campos obligatorios marcados con{' '}
          <span style={{ color: 'red', fontSize: '16px', fontWeight: 700 }}>*</span>, marque la casilla "Confirmo", pulse
          «Enviar solicitud» y verá la notificación de envío.
        </div>

        <button type="submit" style={submitBtnStyle} disabled={isSubmitting || !agree}>
          ENVIAR SOLICITUD
        </button>

        {error ? (
          <div
            style={{
              marginTop: '12px',
              background: '#fff5f5',
              border: '1px solid #fecaca',
              color: '#7f1d1d',
              padding: '10px 12px',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          >
            {error}
          </div>
        ) : null}

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

export default ClanAutoSearchES;
