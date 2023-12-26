import React from 'react'
import { prisma } from "@/lib/prisma";
import TripHeader from "./components/TripHeader"
import TripReservation from './components/TripReservation';
import TripDescription from './components/TripDescription';
import TripHighLights from './components/TripHighLights';

const getTripDetails = async (tripId: string) => {
    const trip = await prisma.trip.findUnique({
      where: {
        id: tripId,
      },
    });
  
    return trip;
  };
  

  const TripDetails = async ({ params }: { params: { tripId: string } }) => {
    const trip = await getTripDetails(params.tripId);
  
    if (!trip) return null;
  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
      <TripHighLights highlights={trip.highlights} />
    </div>
  )
}

export default TripDetails
