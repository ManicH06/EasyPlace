'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Clock, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

/** 1) Extend HTMLDivElement to include _leaflet_id */
interface LeafletDivElement extends HTMLDivElement {
  _leaflet_id?: number
}

export default function ShopLocation() {
  /** 2) Use the custom type in your ref */
  const mapRef = useRef<LeafletDivElement | null>(null)

  useEffect(() => {
    const container = mapRef.current
    /** 3) Use container._leaflet_id directly, no need for "as any" */
    if (!container || container._leaflet_id) {
      return
    }

    const position: [number, number] = [48.8566, 2.3522]
    const newMap = L.map(container).setView(position, 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(newMap)

    L.marker(position).addTo(newMap)
  }, [])

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=123+Rue+des+Gourmands+75000+Paris`,
      '_blank'
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Nous trouver</h2>
      <div className="grid gap-8 md:grid-cols-[1fr,400px]">
        <div
          ref={mapRef}
          className="h-[400px] bg-muted rounded-lg overflow-hidden"
        />
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-muted-foreground">
                  123 Rue des Gourmands,
                  <br />
                  75000 Paris
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Horaires</h3>
                <p className="text-muted-foreground">
                  Lundi au Samedi
                  <br />
                  6h30 - 19h00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">Contact</h3>
                <p className="text-muted-foreground">01 23 45 67 89</p>
              </div>
            </div>

            <Button className="w-full mt-4" onClick={handleGetDirections}>
              Itinéraire
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
