
    // Icons
    const icons = {
      bed: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M12 10v10"/></svg>',
      bath: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21h6"/><path d="M7 11v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><path d="M3 11h18"/><path d="M5 11v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>',
      area: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
      mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
      search: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
      heart: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
      arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
      chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
      chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
      chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
      star: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      check: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
      menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>',
      x: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
      phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      mail: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
      sun: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
      moon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
      facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
      twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>',
      instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
      linkedin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
      trend: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
      sparkles: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
      arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>',
      send: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>',
      filter: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
      checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      alertCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>',
      target: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
      eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>'
    };
    window.icon = function (name, cls = "w-5 h-5") {
    const svg = icons[name] || icons.check || "";
    return `<span class="${cls} inline-flex items-center justify-center">${svg}</span>`;
};
    
    // Data
    const propertyTypes = ['Apartment', 'Villa', 'Commercial', 'Office', 'Luxury House'];
    const locations = ['Highland Park, CA', 'Beverly Hills, CA', 'Manhattan, NY', 'Miami Beach, FL', 'Austin, TX', 'Seattle, WA'];

    const amenitiesList = ['Swimming Pool', 'Gym', 'Garden', 'Garage', 'Smart Home', 'Security System', 'Fireplace', 'Elevator', 'Rooftop Terrace', 'Wine Cellar', 'Home Theater', 'Ocean View'];

    const properties = [
      { id:1, title:'Modern Hillside Villa', location:'Highland Park, CA', price:1250000, beds:4, baths:3, area:3200, type:'Villa', status:'For Sale', image:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'], amenities:['Swimming Pool','Gym','Garden','Garage','Smart Home','Security System'], featured:true },
      { id:2, title:'Downtown Penthouse', location:'Manhattan, NY', price:2400000, beds:3, baths:3, area:2100, type:'Luxury House', status:'For Sale', image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=800&q=80'], amenities:['Rooftop Terrace','Gym','Smart Home','Elevator','Security System','Home Theater'], featured:true },
      { id:3, title:'Beachfront Condo', location:'Miami Beach, FL', price:890000, beds:2, baths:2, area:1400, type:'Apartment', status:'For Rent', image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'], amenities:['Ocean View','Swimming Pool','Gym','Security System','Garage'], featured:true },
      { id:4, title:'Suburban Family Home', location:'Austin, TX', price:650000, beds:4, baths:2, area:2400, type:'Villa', status:'For Sale', image:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80'], amenities:['Garden','Garage','Fireplace','Smart Home','Security System'], featured:true },
      { id:5, title:'Minimalist Loft', location:'Seattle, WA', price:720000, beds:2, baths:1, area:1100, type:'Apartment', status:'For Sale', image:'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=800&q=80'], amenities:['Smart Home','Gym','Elevator','Rooftop Terrace'], featured:false },
      { id:6, title:'Luxury Beverly Estate', location:'Beverly Hills, CA', price:4500000, beds:6, baths:7, area:6500, type:'Luxury House', status:'For Sale', image:'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80'], amenities:['Swimming Pool','Wine Cellar','Home Theater','Gym','Garden','Garage','Smart Home','Security System','Fireplace'], featured:true },
      { id:7, title:'Modern Office Space', location:'Manhattan, NY', price:1800000, beds:0, baths:2, area:3000, type:'Office', status:'For Sale', image:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'], amenities:['Elevator','Security System','Smart Home','Rooftop Terrace'], featured:false },
      { id:8, title:'Retail Commercial Hub', location:'Austin, TX', price:3200000, beds:0, baths:4, area:5200, type:'Commercial', status:'For Sale', image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80'], amenities:['Security System','Garage','Elevator'], featured:false },
      { id:9, title:'Cozy Garden Apartment', location:'Highland Park, CA', price:420000, beds:1, baths:1, area:780, type:'Apartment', status:'For Rent', image:'https://images.unsplash.com/photo-1502005229762-cf1e8c4c62f5?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1502005229762-cf1e8c4c62f5?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'], amenities:['Garden','Smart Home','Security System'], featured:false },
      { id:10, title:'Seaside Luxury Villa', location:'Miami Beach, FL', price:3200000, beds:5, baths:5, area:4800, type:'Villa', status:'For Sale', image:'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80','https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80'], amenities:['Ocean View','Swimming Pool','Gym','Garden','Garage','Smart Home','Security System','Home Theater'], featured:true },
      { id:11, title:'Urban Studio Loft', location:'Seattle, WA', price:550000, beds:1, baths:1, area:650, type:'Apartment', status:'For Sale', image:'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'], amenities:['Smart Home','Gym','Elevator'], featured:false },
      { id:12, title:'Executive Office Suite', location:'Beverly Hills, CA', price:950000, beds:0, baths:1, area:1500, type:'Office', status:'For Rent', image:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80', images:['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'], amenities:['Elevator','Security System','Smart Home'], featured:false }
    ];

    const agents = [
      { id:1, name:'Sarah Jenkins', role:'Senior Agent', image:'https://s.headshots.fun/use-case-img/tech-professional.jpeg', sold:142, exp:8, active:12 },
      { id:2, name:'Michael Torres', role:'Luxury Specialist', image:'https://tse1.mm.bing.net/th/id/OIP.w5XGtyJQUuBSdwoFwCVccAHaE7?r=0&w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3', sold:98, exp:6, active:8 },
      { id:3, name:'Emily Chen', role:'Investment Advisor', image:'https://img.freepik.com/premium-photo/photo-portrait-young-happy-business-woman-office-girl-secretary-with-smiling-face_564692-7455.jpg', sold:176, exp:10, active:15 },
      { id:4, name:'David Miller', role:'Commercial Lead', image:'https://img.freepik.com/premium-photo/young-professional-corporate-person_1146775-815.jpg', sold:84, exp:5, active:6 },
      { id:5, name:'Jessica Brown', role:'Relocation Expert', image:'https://img.freepik.com/premium-photo/confident-asian-businesswoman-black-suit-impressive-front-view-smiling-professional_1000124-24864.jpg', sold:112, exp:7, active:9 },
      { id:6, name:'Robert Wilson', role:'Property Manager', image:'https://img.freepik.com/premium-photo/man-suit-stands-front-window_662214-545818.jpg', sold:67, exp:4, active:5 }
    ];

    const testimonials = [
      { id:1, name:'Amanda Lee', role:'Homeowner', avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', rating:5, text:'EstateX made buying our first home incredibly smooth. The agents were responsive and the search filters are fantastic.' },
      { id:2, name:'James Carter', role:'Investor', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', rating:5, text:'A premium experience from start to finish. The market insights and mortgage calculator helped me close faster.' },
      { id:3, name:'Sophia Nguyen', role:'Renter', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', rating:4, text:'Beautiful listings and easy scheduling. I found the perfect apartment in less than a week.' },
      { id:4, name:'Daniel Kim', role:'Seller', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', rating:5, text:'Professional photography, great exposure, and a dedicated agent. Sold above asking price.' }
    ];

    const blogs = [
      { id:1, title:'10 Tips for First-Time Home Buyers', category:'Buying', date:'Oct 12, 2024', excerpt:'Navigate the market with confidence using these essential strategies for first-time buyers.', image:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80' },
      { id:2, title:'2025 Real Estate Market Trends', category:'Market', date:'Sep 28, 2024', excerpt:'Experts predict continued growth in suburban and luxury sectors. Here is what to watch.', image:'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=600&q=80' },
      { id:3, title:'How to Stage Your Home for Sale', category:'Selling', date:'Sep 15, 2024', excerpt:'Small changes can make a big impact. Learn how staging increases sale price.', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' }
    ];

    const categories = [
      { name:'Apartment', count:32, icon:'building', image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80' },
      { name:'Villa', count:18, icon:'home', image:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80' },
      { name:'Commercial', count:12, icon:'briefcase', image:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80' },
      { name:'Office', count:9, icon:'briefcase', image:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' },
      { name:'Luxury House', count:15, icon:'star', image:'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=400&q=80' }
    ];

    const whyChoose = [
      { title:'Verified Listings', text:'Every property is verified by our team so you can browse with confidence.', icon:'shield' },
      { title:'Expert Agents', text:'Connect with top-rated local agents who know the market inside out.', icon:'award' },
      { title:'Smart Tools', text:'Mortgage calculators, comparisons, and filters tailored to your needs.', icon:'trend' },
      { title:'Secure Process', text:'End-to-end support and transparent documentation for every transaction.', icon:'check' }
    ];

    const statsBase = [
      { label:'Properties Listed', value:1200, suffix:'+', display:0 },
      { label:'Happy Clients', value:850, suffix:'+', display:0 },
      { label:'Cities Covered', value:45, suffix:'+', display:0 },
      { label:'Expert Agents', value:120, suffix:'+', display:0 }
    ];

    const faqs = [
      { q:'What types of properties do you list?', a:'We list apartments, villas, commercial spaces, offices, and luxury homes across major cities.', open:false },
      { q:'How do I schedule a property visit?', a:'Click "Schedule Visit" on any listing or contact us to arrange a private tour.', open:false },
      { q:'Do I need a real estate agent?', a:'Not required, but our agents can help negotiate and manage paperwork at no extra cost to buyers.', open:false },
      { q:'Is there a fee for buyers?', a:'No. EstateX is free for buyers and renters. Sellers pay a competitive commission.', open:false }
    ];

    const timeline = [
      { year:'2015', title:'Founded', text:'EstateX started with a small team in New York.' },
      { year:'2018', title:'National Expansion', text:'Opened offices in 15 major U.S. cities.' },
      { year:'2021', title:'Platform Launch', text:'Launched the digital platform with smart search and virtual tours.' },
      { year:'2024', title:'Global Reach', text:'Expanded services to international markets with 50+ cities.' }
    ];

    const partners = ['LuxeLiving', 'HomeFirst', 'UrbanNest', 'PrimeSpace', 'Skyline'];

    function estatex() {
      return {
        currentPage: 'home',
        scrolled: false,
        scrollPercent: 0,
        darkMode: false,
        menuOpen: false,
        loading: false,
        page: 1,
        perPage: 6,
        navItems: [
          { page:'home', label:'Home' },
          { page:'properties', label:'Properties' },
          { page:'agents', label:'Agents' },
          { page:'about', label:'About' },
          { page:'contact', label:'Contact' }
        ],
        propertyTypes,
        properties,
        agents,
        testimonials,
        blogs,
        categories,
        whyChoose,
        partners,
        faqs,
        timeline,
        stats: JSON.parse(JSON.stringify(statsBase)),
        heroSearch: '',
        heroType: '',
        heroBudget: '',
        suggestions: [],
        filters: {
          search: '',
          type: '',
          status: '',
          minPrice: '',
          maxPrice: '',
          beds: '',
          baths: '',
          sort: 'featured'
        },
        wishlist: [],
        compareList: [],
        compareOpen: false,
        toasts: [],
        cookieAccepted: null,
        newsletterOpen: false,
        newsletterEmail: '',
        popupEmail: '',
        lightbox: { open:false, images:[], index:0 },
        schedule: { open:false, propertyId:null, name:'', email:'', phone:'', date:'', time:'', message:'' },
        contact: { name:'', email:'', phone:'', subject:'', message:'', errors:{} },
        mortgage: { price:500000, down:100000, rate:4.5, years:30 },
        propertyId: null,
        swiper: null,

        initApp() {
          const savedDark = localStorage.getItem('estatex-dark');
          this.darkMode = savedDark ? savedDark === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
          this.applyDark();
          this.wishlist = JSON.parse(localStorage.getItem('estatex-wishlist') || '[]');
          this.compareList = JSON.parse(localStorage.getItem('estatex-compare') || '[]');
          this.cookieAccepted = localStorage.getItem('estatex-cookie') || null;
          this.parseHash();
          window.addEventListener('hashchange', () => this.parseHash());
          window.addEventListener('scroll', () => {
            const st = window.scrollY;
            this.scrolled = st > 50;
            const dh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            this.scrollPercent = dh > 0 ? (st / dh) * 100 : 0;
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) heroBg.style.transform = `translateY(${st * 0.35}px) scale(1.05)`;
          });
          window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModals();
            if (this.lightbox.open) {
              if (e.key === 'ArrowRight') this.nextImage();
              if (e.key === 'ArrowLeft') this.prevImage();
            }
          });
          this.$watch('filters', () => { this.page = 1; }, { deep:true });
          this.$watch('currentPage', (value) => {
            if (value === 'home') setTimeout(() => this.initSwiper(), 150);
          });
          if (this.currentPage === 'home') setTimeout(() => this.initSwiper(), 200);
          this.initCounters();
          this.initReveal();
          this.initMagnetic();
          setTimeout(() => {
            if (!localStorage.getItem('estatex-newsletter')) this.newsletterOpen = true;
          }, 9000);
        },

        applyDark() {
          if (this.darkMode) document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
          localStorage.setItem('estatex-dark', this.darkMode);
        },
        toggleDark() { this.darkMode = !this.darkMode; this.applyDark(); },

        parseHash() {
          const raw = window.location.hash.replace('#', '');
          const [page, query] = raw.split('?');
          const params = new URLSearchParams(query || '');
          const known = ['home','properties','property','agents','about','contact'];
          if (!page || page === 'home') {
            this.currentPage = 'home';
            this.propertyId = null;
          } else if (known.includes(page)) {
            this.currentPage = page;
            if (page === 'property') {
              this.propertyId = Number(params.get('id'));
            } else {
              this.propertyId = null;
            }
          } else {
            this.currentPage = '404';
            this.propertyId = null;
          }
          this.menuOpen = false;
          this.loading = false;
          if (this.currentPage === 'home') setTimeout(() => this.initSwiper(), 150);
        },

        navigate(page, params = {}) {
          this.loading = true;
          this.menuOpen = false;
          let hash = page === 'home' ? '' : `#${page}`;
          if (params.id) hash += `?id=${params.id}`;
          window.location.hash = hash;
          setTimeout(() => { this.loading = false; window.scrollTo({top:0, behavior:'smooth'}); }, 350);
        },

        closeModals() {
          this.schedule.open = false;
          this.lightbox.open = false;
          this.compareOpen = false;
          this.newsletterOpen = false;
          this.suggestions = [];
        },

        // Formatters
        formatPrice(n) {
          return '$' + Number(n).toLocaleString();
        },
        formatNumber(n) {
          return Number(n).toLocaleString();
        },

        // Properties
        get featuredProperties() {
          return this.properties.filter(p => p.featured).slice(0, 6);
        },
        get selectedProperty() {
          if (!this.propertyId) return null;
          return this.properties.find(p => p.id === this.propertyId) || null;
        },
        similarProperties() {
          if (!this.selectedProperty) return [];
          return this.properties.filter(p => p.id !== this.selectedProperty.id && p.type === this.selectedProperty.type).slice(0, 3);
        },
        filteredProperties() {
          let list = this.properties.filter(p => {
            const q = (this.filters.search || '').toLowerCase();
            const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
            const matchesType = !this.filters.type || p.type === this.filters.type;
            const matchesStatus = !this.filters.status || p.status === this.filters.status;
            const matchesMin = !this.filters.minPrice || p.price >= Number(this.filters.minPrice);
            const matchesMax = !this.filters.maxPrice || p.price <= Number(this.filters.maxPrice);
            const matchesBeds = !this.filters.beds || p.beds >= Number(this.filters.beds);
            const matchesBaths = !this.filters.baths || p.baths >= Number(this.filters.baths);
            return matchesSearch && matchesType && matchesStatus && matchesMin && matchesMax && matchesBeds && matchesBaths;
          });
          if (this.filters.sort === 'price-asc') list.sort((a,b) => a.price - b.price);
          if (this.filters.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
          if (this.filters.sort === 'newest') list.sort((a,b) => b.id - a.id);
          return list;
        },
        paginatedProperties() {
          const start = (this.page - 1) * this.perPage;
          return this.filteredProperties().slice(start, start + this.perPage);
        },
        totalPages() {
          return Math.ceil(this.filteredProperties().length / this.perPage);
        },
        resetFilters() {
          this.filters = { search:'', type:'', status:'', minPrice:'', maxPrice:'', beds:'', baths:'', sort:'featured' };
          this.page = 1;
        },

        // Search
        updateSuggestions(q) {
          if (!q) { this.suggestions = []; return; }
          const low = q.toLowerCase();
          this.suggestions = this.properties.filter(p => p.title.toLowerCase().includes(low) || p.location.toLowerCase().includes(low)).slice(0, 5);
        },
        selectSuggestion(s) {
          this.heroSearch = s.location;
          this.suggestions = [];
        },
        searchFromHero() {
          this.filters.search = this.heroSearch;
          if (this.heroType) this.filters.type = this.heroType;
          if (this.heroBudget) {
            if (this.heroBudget === '2000001') { this.filters.minPrice = 2000000; this.filters.maxPrice = ''; }
            else { this.filters.maxPrice = Number(this.heroBudget); this.filters.minPrice = ''; }
          }
          this.page = 1;
          this.navigate('properties');
        },

        // Wishlist
        isWishlisted(id) { return this.wishlist.includes(id); },
        toggleWishlist(id) {
          if (this.wishlist.includes(id)) {
            this.wishlist = this.wishlist.filter(i => i !== id);
            this.toast('Removed from wishlist');
          } else {
            this.wishlist.push(id);
            this.toast('Saved to wishlist');
          }
          localStorage.setItem('estatex-wishlist', JSON.stringify(this.wishlist));
        },

        // Compare
        toggleCompare(id) {
          if (this.compareList.includes(id)) {
            this.compareList = this.compareList.filter(i => i !== id);
          } else {
            if (this.compareList.length >= 3) {
              this.toast('You can compare up to 3 properties', 'error');
              return;
            }
            this.compareList.push(id);
          }
          localStorage.setItem('estatex-compare', JSON.stringify(this.compareList));
        },
        compareProperties() {
          return this.properties.filter(p => this.compareList.includes(p.id));
        },

        // Schedule
        openSchedule(id) {
          this.schedule.propertyId = id;
          this.schedule.open = true;
        },
        submitSchedule() {
          if (!this.schedule.name || !this.schedule.email || !this.schedule.date || !this.schedule.time) {
            this.toast('Please fill all required fields', 'error');
            return;
          }
          this.toast('Visit scheduled successfully');
          this.schedule.open = false;
          this.schedule = { open:false, propertyId:null, name:'', email:'', phone:'', date:'', time:'', message:'' };
        },

        // Contact
        submitContact() {
          this.contact.errors = {};
          if (!this.contact.name.trim()) this.contact.errors.name = 'Name is required';
          const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRe.test(this.contact.email)) this.contact.errors.email = 'Valid email is required';
          if (!this.contact.message.trim()) this.contact.errors.message = 'Message is required';
          if (Object.keys(this.contact.errors).length > 0) {
            this.toast('Please fix the errors', 'error');
            return;
          }
          this.toast('Message sent successfully');
          this.contact = { name:'', email:'', phone:'', subject:'', message:'', errors:{} };
        },

        // Mortgage
        calculateMortgage() {
          const principal = Math.max(0, this.mortgage.price - this.mortgage.down);
          const r = (this.mortgage.rate / 100) / 12;
          const n = this.mortgage.years * 12;
          if (r === 0) return principal / n;
          return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        },

        // Lightbox
        openLightbox(index) {
          if (!this.selectedProperty) return;
          this.lightbox.images = this.selectedProperty.images;
          this.lightbox.index = Math.min(index, this.lightbox.images.length - 1);
          this.lightbox.open = true;
        },
        nextImage() {
          this.lightbox.index = (this.lightbox.index + 1) % this.lightbox.images.length;
        },
        prevImage() {
          this.lightbox.index = (this.lightbox.index - 1 + this.lightbox.images.length) % this.lightbox.images.length;
        },

        // Newsletter
        subscribeNewsletter() {
          if (!this.newsletterEmail) return;
          localStorage.setItem('estatex-newsletter', 'subscribed');
          this.toast('Subscribed to newsletter');
          this.newsletterEmail = '';
        },
        subscribePopup() {
          if (!this.popupEmail) return;
          localStorage.setItem('estatex-newsletter', 'subscribed');
          this.toast('Subscribed to newsletter');
          this.popupEmail = '';
          this.newsletterOpen = false;
        },
        closeNewsletter() {
          localStorage.setItem('estatex-newsletter', 'dismissed');
          this.newsletterOpen = false;
        },

        // Cookie
        acceptCookie() {
          localStorage.setItem('estatex-cookie', 'true');
          this.cookieAccepted = 'true';
        },

        // Toast
        toast(message, type = 'success') {
          const id = Date.now() + Math.random();
          this.toasts.push({ id, message, type });
          setTimeout(() => { this.toasts = this.toasts.filter(t => t.id !== id); }, 4000);
        },

        // UI interactions
        tilt(e, el) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const cx = rect.width / 2;
          const cy = rect.height / 2;
          const rx = (y - cy) / 12;
          const ry = -(x - cx) / 12;
          el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
        },
        resetTilt(el) {
          el.style.transform = '';
        },
        initMagnetic() {
          document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.magnetic').forEach(btn => {
              const rect = btn.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width/2;
              const y = e.clientY - rect.top - rect.height/2;
              const dist = Math.sqrt(x*x + y*y);
              if (dist < 80) {
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
              } else {
                btn.style.transform = '';
              }
            });
          });
        },
        initReveal() {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) entry.target.classList.add('visible');
            });
          }, { threshold: 0.1 });
          setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
          }, 100);
        },
        initCounters() {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                this.animateStats();
                observer.disconnect();
              }
            });
          }, { threshold: 0.5 });
          const section = document.getElementById('stats-section');
          if (section) observer.observe(section);
        },
        animateStats() {
          this.stats.forEach(stat => {
            const target = stat.value;
            const duration = 2000;
            const startTime = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              stat.display = Math.floor(eased * target);
              if (progress < 1) requestAnimationFrame(tick);
              else stat.display = target;
            };
            requestAnimationFrame(tick);
          });
        },
        initSwiper() {
          if (this.swiper) { this.swiper.destroy(); this.swiper = null; }
          const el = document.querySelector('.testimonials-swiper');
          if (!el) return;
          this.swiper = new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
          });
        }
      };
    }
  document.addEventListener("alpine:init", () => {
    Alpine.data("estatex", estatex);
});
