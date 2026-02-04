let allEvents = [];

async function loadEvents() {
    try {
    const response = await fetch('./events.json');
    const data = await response.json();
    allEvents = data.events;
    renderEvents(allEvents);
    } catch (error) {
    console.error('Error loading events:', error);
    }
}

function renderEvents(events) {
    const container = document.getElementById('events-container');
    container.innerHTML = '';

    events.forEach(event => {
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    eventDiv.innerHTML = `
        <h2>${event.name}</h2>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p><strong>Description:</strong> ${event.description}</p>
        <div class="event-details" id="details-${event.id}" style="display: none;">
            ${event.photo ? `<img src="${event.photo}" alt="${event.name}" class="event-photo">` : ''}
            <p><strong>Destination:</strong> ${event.target}</p>
            <p><strong>Result:</strong> ${event.result}</p>
        </div>
        <button class="btn-see-more" data-event-id="${event.id}">See More</button>
    `;
    container.appendChild(eventDiv);
    });

    document.querySelectorAll('.btn-see-more').forEach(button => {
    button.addEventListener('click', () => {
        const eventId = button.dataset.eventId;
        const detailsDiv = document.getElementById(`details-${eventId}`);
        const isVisible = detailsDiv.style.display !== 'none';
        
        detailsDiv.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'See More' : 'See Less';
    });
    });
}

function filterEvents(filter) {
    let filtered = allEvents;

    if (filter === 'mexico') {
    filtered = allEvents.filter(event => event.location.includes('MX'));
    } else if (filter === 'brazil') {
    filtered = allEvents.filter(event => event.location.includes('BR'));
    }

    renderEvents(filtered);
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    filterEvents(button.dataset.filter);
    });
});

loadEvents();