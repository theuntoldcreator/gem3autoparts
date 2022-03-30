const { createClient } = supabase
supabase = createClient("https://rztqxklqktcbndqzqjaj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dHF4a2xxa3RjYm5kcXpxamFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg2MjIzMjgsImV4cCI6MTk2NDE5ODMyOH0.5-ivf8oP_FYIuWzFwymW_LKbF9GkJo9tWKez6phr6yk")

const form = document.querySelector('#contact-form')
form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formInputs = form.querySelectorAll('input, select, textarea')

    let submision = {}

    formInputs.forEach(element => {
      const { value, name } = element
      if (value) {
          submision[name] = value
      }
    })

    const { error } = await supabase.from('entries').insert([submision], { returning: 'minimal'})

    if (error) {
        alert('There was an error please try again')
    } else {
        alert('Thanks for contacting us')
    }

    formInputs.forEach(element => element.value = '')

})