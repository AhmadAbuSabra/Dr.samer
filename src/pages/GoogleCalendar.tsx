import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

// Define a type for the event objects received from Google Calendar API
type GoogleCalendarEvent = {
  id: string;
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
};

const GoogleCalendar = () => {
    const { data: session } = useSession();
    const [events, setEvents] = useState<GoogleCalendarEvent[]>([]);
    const [newEventSummary, setNewEventSummary] = useState('');
    const [editingEvent, setEditingEvent] = useState<GoogleCalendarEvent | null>(null);

    useEffect(() => {
        console.log('Session:', session); // Log the session object

        if (session?.accessToken) {
            fetchEvents();
        }
    }, [session]);

    const fetchEvents = async () => {
        if (!session?.accessToken) return;
        try {
            const response = await axios.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            });
            console.log('Events fetched:', response.data.items); // Log the fetched events
            setEvents(response.data.items);
        } catch (error) {
            console.error('Error fetching Google Calendar events:', error);
        }
    };
    
    const addEvent = async () => {
        if (!session?.accessToken || !newEventSummary) return;
        const event = {
            summary: newEventSummary,
            start: { dateTime: new Date().toISOString() },
            end: { dateTime: new Date(Date.now() + 3600000).toISOString() }, // 1 hour later
        };
        try {
            await axios.post('https://www.googleapis.com/calendar/v3/calendars/primary/events', event, {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            });
            setNewEventSummary('');
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const updateEvent = async () => {
        if (!session?.accessToken || !editingEvent) return;
        const updatedEvent = {
            summary: editingEvent.summary,
            start: editingEvent.start,
            end: editingEvent.end,
        };
        try {
            await axios.put(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${editingEvent.id}`, updatedEvent, {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            });
            setEditingEvent(null);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteEvent = async (eventId: string) => {
        if (!session?.accessToken) return;
        try {
            await axios.delete(`https://www.googleapis.com/calendar/v3/calendars/primary/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`,
                },
            });
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Google Calendar Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        {event.summary} - {new Date(event.start.dateTime).toLocaleString()}
                        <button onClick={() => setEditingEvent(event)}>Edit</button>
                        <button onClick={() => deleteEvent(event.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    placeholder="Event Summary"
                    value={newEventSummary}
                    onChange={(e) => setNewEventSummary(e.target.value)}
                />
                <button onClick={addEvent}>Add Event</button>
            </div>
            {editingEvent && (
                <div>
                    <input
                        type="text"
                        placeholder="Edit Event Summary"
                        value={editingEvent.summary}
                        onChange={(e) => editingEvent && setEditingEvent({ ...editingEvent, summary: e.target.value })}
                    />
                    <button onClick={updateEvent}>Update Event</button>
                </div>
            )}
        </div>
    );
};

export default GoogleCalendar;
