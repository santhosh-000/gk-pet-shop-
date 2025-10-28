# gk-pet-shop-
GK Pet Shop is a full-stack web application built with Node.js, Express, MongoDB, and a frontend using HTML/CSS/JS. It provides users with a smooth experience to explore pets, pet accessories, and share feedback — while allowing admins to manage feedbacks efficiently.


🔗 Live Site: https://gkpetsshopandaquarium.netlify.app/


🌟 KEY FEATURES

🐶 Variety of Pets:
Beautifully designed pages showcasing different types of pets.

🧸 Pet Accessories & Foods:
Separate pages for accessories and pet foods with clear visuals.

💬 Customer Feedback System:
Users can share feedbacks. These go to the Admin Panel first.

🛡️ Admin Panel:
Admin can Approve or Delete feedback.
Approved → displayed on the site
Deleted → removed permanently

📍 Shop Location Map:
Integrated Google Map shows GK Pet Shop’s exact location.

⚡ Real-Time Update System:
Admin approval instantly updates the feedback section in the live site.


```
🧩 FOLDER STRUCTURE

gk-pet-shop-
│
├── backend
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── git.gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── admin.html
│   ├── foods and accosories.html
│   ├── home page.css
│   ├── index.html
│   ├── product1.html
│   ├── product2.html
│   ├── product3.html
│   ├── product4.html
│   ├── product5.html
│   ├── product6.html
│   └── Stocks/
│
├── node_modules/
│   ├── express/
│   ├── mongoose/
│   ├── dotenv/
│   ├── cors/
│   └── (other dependencies)
│
├── README.md
└── package-lock.json ``` 

```
⚙️ Tech Stack

| Category         | Technology                                       |
| ---------------- | ------------------------------------------------ |
| **Frontend**     | HTML, CSS, JavaScript                            |
| **Backend**      | Node.js, Express.js                              |
| **Database**     | MongoDB (via Mongoose)                           |
| **Hosting**      | Netlify (Frontend), Render (Backend)             |
| **Dependencies** | Axios, BcryptJS, UUID, CORS, Dotenv, Body-Parser |
```

```
📡 API Routes

| Endpoint                          | Method | Description               |
| --------------------------------- | ------ | ------------------------- |
| `/api/feedback`                   | POST   | Submit user feedback      |
| `/api/admin/feedback`             | GET    | Get all feedbacks (Admin) |
| `/api/admin/feedback/:id/approve` | PATCH  | Approve a feedback        |
| `/api/admin/feedback/:id/delete`  | DELETE | Delete a feedback         |
```

```
💡 HOW IT WORKS

🧍 User visits the site → explores pets & accessories.

✍️ Submits a feedback → stored in the backend.

👨‍💼 Admin checks feedbacks in the Admin Panel.

✅ Approves → feedback shown on the website.

❌ Deletes → feedback permanently removed.

🗺️ User can locate the GK Pet Shop using Google Maps on the homepage.



🔮 FUTURE ENHANCEMENTS

🛒 Add cart and online ordering for pet accessories

💰 Integrate payment gateway

📊 Add admin analytics dashboard

🧠 Improve UI with modern frameworks like React



👨‍💻 DEVELOPER

Developed by: Santhosh Kumar. S

Role: Full Stack Developer || Project Type: Real-Time Full Stack Application


🏁 CONCLUSION

GK Pet Shop is a real-world full stack project that blends design and functionality.
It showcases CRUD operations, admin control.
