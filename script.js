document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebarNavItems = document.querySelectorAll('.sidebar-nav ul li');
    const heroSection = document.getElementById('hero-section');
    const heroHeading = document.getElementById('hero-heading');
    const bookingFormCard = document.getElementById('booking-form-card');
    // --- Data for different sections ---
    const sectionsData = {
        flights: {
            heading: "It's time to fly!",
            backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ32EhPQpHfNnylc5fnvaGbq4QN7R4VMr02g&s",
            formHtml: `
                <div class="trip-type-selector">
                    <button class="trip-type-btn active" data-trip-type="round-trip">Round Trip</button>
                    <button class="trip-type-btn" data-trip-type="one-way">One Way</button>
                </div>
                <form class="booking-form flight-search-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="origin">Origin</label>
                            <input type="text" id="origin" placeholder="e.g., Delhi" required>
                        </div>
                        <div class="form-group">
                            <label for="destination">Destination</label>
                            <input type="text" id="destination" placeholder="e.g., Kuala Lumpur" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="departure-date">Departure Date</label>
                            <input type="date" id="departure-date" class="date-picker" required>
                        </div>
                        <div class="form-group return-date-group">
                            <label for="return-date">Return Date</label>
                            <input type="date" id="return-date" class="date-picker">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="passengers">Passengers</label>
                            <div class="passenger-control">
                                <button type="button" id="decrease-passengers">-</button>
                                <input type="number" id="passengers" value="1" min="1" readonly>
                                <button type="button" id="increase-passengers">+</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="class">Class</label>
                            <select id="class">
                                <option value="economy">Economy</option>
                                <option value="premium-economy">Premium Economy</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-search">Search Flights</button>
                </form>
            `
        },
        trains: {
            heading: "Book Your Train Journey!",
            backgroundImage: "https://media.istockphoto.com/id/1902331837/photo/indias-first-indigenous-development-semi-high-speed-vande-bharat-express-also-known-as-train.jpg?s=612x612&w=0&k=20&c=16jReanvhLHTDaWKmnh2LjlE2e1xlJueJE1hK9-qrtk=",
            formHtml: `
                <form class="booking-form train-search-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="train-from">From</label>
                            <input type="text" id="train-from" placeholder="e.g., Mumbai" required>
                        </div>
                        <div class="form-group">
                            <label for="train-to">To</label>
                            <input type="text" id="train-to" placeholder="e.g., Delhi" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="train-date">Departure Date</label>
                            <input type="date" id="train-date" class="date-picker" required>
                        </div>
                        <div class="form-group">
                            <label for="train-passengers">Passengers</label>
                            <div class="passenger-control">
                                <button type="button" class="decrease-passengers-train">-</button>
                                <input type="number" id="train-passengers" value="1" min="1" readonly>
                                <button type="button" class="increase-passengers-train">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                    if (value > parseInt(inputField.min || 1)) { // Default min to 1 if not specified
                        <div class="form-group">
                            <label for="train-class">Class</label>
                            <select id="train-class">
                                <option value="sleeper">Sleeper (SL)</option>
                                <option value="ac-3a">AC 3 Tier (3A)</option>
                                <option value="ac-2a">AC 2 Tier (2A)</option>
                                <option value="ac-1a">AC 1 Tier (1A)</option>
                                <option value="cc">Chair Car (CC)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="train-quota">Quota</label>
                            <select id="train-quota">
                                <option value="general">General</option>
                                <option value="tatkal">Tatkal</option>
                                <option value="ladies">Ladies</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-search">Search Trains</button>
                </form>
            `
        },
        buses: {
            heading: "Travel by Bus, Explore More!",
            backgroundImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fHww",
            formHtml: `
                <form class="booking-form bus-search-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="bus-from">From</label>
                            <input type="text" id="bus-from" placeholder="e.g., Bangalore" required>
                        </div>
                        <div class="form-group">
                            <label for="bus-to">To</label>
                            <input type="text" id="bus-to" placeholder="e.g., Chennai" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="bus-date">Departure Date</label>
                            <input type="date" id="bus-date" class="date-picker" required>
                        </div>
                        <div class="form-group">
                            <label for="bus-passengers">Passengers</label>
                            <div class="passenger-control">
                                <button type="button" class="decrease-passengers-bus">-</button>
                                <input type="number" id="bus-passengers" value="1" min="1" readonly>
                                <button type="button" class="increase-passengers-bus">+</button>
                            </div>
                            document.body.classList.toggle('no-scroll', sidebar.classList.contains('open'));
                        </div>
                    </div>
                    <button type="submit" class="btn btn-search">Search Buses</button>
                </form>
            `
        },
        hotels: {
            heading: "Find Your Perfect Stay!",
            backgroundImage: "https://media.istockphoto.com/id/503016934/photo/entrance-of-luxury-hotel.jpg?s=612x612&w=0&k=20&c=DXFzucB2xWGf3PI6_yjhLKDvrFcGlOpOjXh6KDI8rqU=",
            formHtml: `
                <form class="booking-form hotel-search-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="hotel-destination">Destination</label>
                            <input type="text" id="hotel-destination" placeholder="e.g., Goa" required>
                        </div>
                        <div class="form-group">
                            <label for="hotel-checkin">Check-in Date</label>
                            <input type="date" id="hotel-checkin" class="date-picker" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="hotel-checkout">Check-out Date</label>
                            <input type="date" id="hotel-checkout" class="date-picker" required>
                        </div>
                        <div class="form-group">
                            <label for="hotel-guests">Guests</label>
                            <div class="passenger-control">
                                <button type="button" class="decrease-guests-hotel">-</button>
                                <input type="number" id="hotel-guests" value="1" min="1" readonly>
                                <button type="button" class="increase-guests-hotel">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="hotel-rooms">Rooms</label>
                            <div class="passenger-control">
                                <button type="button" class="decrease-rooms-hotel">-</button>
                                <input type="number" id="hotel-rooms" value="1" min="1" readonly>
                                <button type="button" class="increase-rooms-hotel">+</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="hotel-type">Hotel Type</label>
                            <select id="hotel-type">
                                <option value="any">Any Type</option>
                                <option value="budget">Budget</option>
                                <option value="mid-range">Mid-range</option>
                                <option value="luxury">Luxury</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-search">Search Hotels</button>
                </form>
            `
        }
    };

    // Function to load content based on section
    const loadSection = (sectionName) => {
        const data = sectionsData[sectionName];
        if (data) {
            heroHeading.textContent = data.heading;
            heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.backgroundImage}')`;
            bookingFormCard.innerHTML = data.formHtml;

            // Re-attach event listeners for newly loaded forms
            attachFormEventListeners();
        }
    };

    // Function to attach event listeners for passenger/guest controls and trip type
    const attachFormEventListeners = () => {
        // Passenger/Guest controls (generic)
        document.querySelectorAll('.passenger-control').forEach(control => {
            const decreaseBtn = control.querySelector('button:first-child');
            const increaseBtn = control.querySelector('button:last-child');
            const inputField = control.querySelector('input[type="number"]');

            if (decreaseBtn && increaseBtn && inputField) {
                decreaseBtn.onclick = () => {
                    let value = parseInt(inputField.value);
                    if (value > parseInt(inputField.min)) {
                        inputField.value = value - 1;
                    }
                };
                increaseBtn.onclick = () => {
                    let value = parseInt(inputField.value);
                    inputField.value = value + 1;
                };
            }
        });

        // Trip Type Selector for Flights (specific)
        const tripTypeBtns = document.querySelectorAll('.trip-type-btn');
        const returnDateGroup = document.querySelector('.return-date-group');
        const returnDateInput = document.getElementById('return-date');

        if (tripTypeBtns.length > 0 && returnDateGroup && returnDateInput) {
            tripTypeBtns.forEach(button => {
                button.addEventListener('click', (e) => {
                    tripTypeBtns.forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');

                    if (e.target.dataset.tripType === 'one-way') {
                        returnDateGroup.style.display = 'none';
                        returnDateInput.removeAttribute('required');
                    } else {
                        returnDateGroup.style.display = 'flex'; // Use flex to maintain column layout
                        returnDateInput.setAttribute('required', 'required');
                    }
                });
            });
            // Set initial state for flights form
            if (tripTypeBtns[0].classList.contains('active') && tripTypeBtns[0].dataset.tripType === 'round-trip') {
                returnDateGroup.style.display = 'flex';
                returnDateInput.setAttribute('required', 'required');
            }
        }
    };

    // --- Sidebar Toggle ---
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        // For smaller screens, toggle 'open' class for fixed sidebar
        if (window.innerWidth <= 992) {
            sidebar.classList.toggle('open');
        }
    });

    // --- Section Switching ---
    sidebarNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            sidebarNavItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');

            const section = item.dataset.section;
            loadSection(section);

            // Close sidebar on mobile after selection
            if (window.innerWidth <= 992 && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    });

    // --- Initial Load ---
    loadSection('flights'); // Load flights section by default

    // Optional: Auto-collapse sidebar on larger screens
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && sidebar.classList.contains('collapsed')) {
            sidebar.classList.remove('collapsed');
        }
        if (window.innerWidth > 992 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open'); // Ensure it's not 'open' on desktop
        }
    });
});