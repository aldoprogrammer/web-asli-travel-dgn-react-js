import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Kirim pesan ke siini yaa cok!</h1>
      <form>
        <input placeholder="Nama"  />
        <input placeholder="Email Kamu"  />
        <input placeholder="Judul"  />
        <textarea placeholder="Komen disini!" rows="4"></textarea>
        <button>Kirim</button>
      </form>
    </div>
  )
}

export default ContactForm
