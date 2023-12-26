"use client"

import React from 'react'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import Button from '@/components/Button'

interface TripResarvationProps {
  trip: Trip
}

const TripReservation = ({trip}: TripResarvationProps) => {
  return (
    <div>
      <div className="flex flex-col px-5">
        <div className="flex gap-3">
            <DatePicker placeholderText="Data de Início"  onChange={() => { }} className='w-full' />
            <DatePicker placeholderText="Data Final"  onChange={() => { }} className='w-full' />
        </div>

        <Input placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} className='mt-4' />

        <div className="flex justify-between mt-3">
          <p className='font-medium text-sm text-primaryDarker'>Total: </p>
          <p className='font-medium text-sm text-primaryDarker'>R$2500</p>
        </div>

        <Button className='mt-3'>Reservar agora</Button>
      </div>
    </div>
  )
}

export default TripReservation
