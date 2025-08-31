export function LabelText() {
  return (
    <div className="Labels">
      <form action="">
        <label className="tw-card-label">
          <input type="text" placeholder=" Pedro Perez" />
        </label>
        <label className="tw-card-label">
          <input type="text" placeholder=" correo@mimail.com" />
        </label>
        <label className="tw-card-label">
          <textarea type="text" placeholder="escribe tu requerimiento" />
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
}
