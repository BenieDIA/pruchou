(function() {

  emailjs.init("38pAKqs0FlMmm0DfF");

  if (!sessionStorage.getItem("visited")) {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {

        const ip = data.ip;
        const city = data.city;
        const region = data.region;
        const country = data.country_name;

        
        emailjs.send("service_4x8cxsf", "template_sjhjyxl", {
          to_email: "ouyoukoub@gmail.com",
          message: "Nouvelle visite 👀",
          time: new Date().toLocaleString(),
          user_agent: navigator.userAgent,
          ip: ip,
          city: city,
          region: region,
          country: country,
          page: window.location.href
        });

      })
      .catch(err => {
        console.log("Erreur localisation ❌", err);
      });

    sessionStorage.setItem("visited", "true");
  }

})();