import React from 'react';
import './Features.css';

function Features() {
    return (
        <div className="features-desktop">
            <div className="with-stops">
                With Stops you can:
            </div>
            <div className="features-list">
                <ul className="list">
                    <li className="feat">
                        Discover the closest Wikipedia article, Google Place, Yelp Review, Meetup, YouTube videos and lots of other content around you.
                    </li>
                    <li className="feat">
                        Create your own geo-based content and let others discover them in Augmented Reality.
                    </li>
                    <li className="feat">
                        Collect stops, file them, and make awesome travel itineraries out of them.
                    </li>
                    <li className="feat">
                        Read more at <a className="stops-link" href="https://www.stops.com/" target="_blank" rel="noopener noreferrer">www.stops.com</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Features;