const data = [
    {
        name: 'johhn doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA'
    },
    {
        name: 'eylul',
        age: 25,
        gender: 'female',
        lookingFor: 'male',
        location: 'Lynn MA'
    },
    {
        name: 'murat',
        age: 35,
        gender: 'male',
        lookingFor: 'female',
        location: 'Miami FR'
    }
]

const profiles = profileIterator(data);

// Next event 
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile () {
    if (profiles.next() === false) {
        const currentProfile = profiles.next().value;
        document.getElementById('profile-display').innerHTML = `
            <ul clss="list-group>
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preferences: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
            </ul>
        `;
    }   else {
        window.location.reload();
        nextProfile();
    }
}

// Profile iterator
function profileIterator (profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true};
        }
    }
}