'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import PersonalInfo from './PersonalInfo'
import OrderHistory from './OrderHistory'
import AccountSettings from './AccountSettings'

type DashboardSection = 'personal' | 'orders' | 'settings'

export default function UserDashboard() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('personal')

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfo />
      case 'orders':
        return <OrderHistory />
      case 'settings':
        return <AccountSettings />
      default:
        return <PersonalInfo />
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord utilisateur</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-64 shrink-0">
          <CardContent className="p-4">
            <nav className="flex flex-col space-y-2">
              <Button 
                variant={activeSection === 'personal' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('personal')}
                className="justify-start"
              >
                Informations personnelles
              </Button>
              <Button 
                variant={activeSection === 'orders' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('orders')}
                className="justify-start"
              >
                Historique des commandes
              </Button>
              <Button 
                variant={activeSection === 'settings' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('settings')}
                className="justify-start"
              >
                Paramètres du compte
              </Button>
            </nav>
          </CardContent>
        </Card>
        <Card className="flex-grow">
          <CardContent className="p-6">
            {renderSection()}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

