'use strict'
import QuantityKinds from './QuantityKinds.js'

/* Sensing devices list
  Generated from FIESTA IoT ontology with this Jena SPARQL script:
  1 PREFIX qu:<http://purl.org/NET/ssnx/qu/qu#>
  2 PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
  3 PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
  4 SELECT (strafter(str(?subClass), "#") AS ?quantityKind)
  5 WHERE { ?subClass rdfs:subClassOf* ssn:SensorKind. } 
  $ bin/sparql --data=http://ontology.fiesta-iot.eu/ontologyDocs/fiesta-iot.owl --query=./rq --results=TSV
  Reference paper: R. Agarwal, D. Farnandez, T. Elsaleh, A.Gyrard, J. Lanza, L. Sanchez, N. Georgantas, V. Issarny, "Unified IoT Ontology to Enable Interoperability and Federation of Testbeds", 3rd IEEE WF-IoT, pp. 70-75, Reston USA, 12-14 December 2016
*/

const dic = [
{id: "Accelerometer",                     label: "Accelerometer",                    QK: ["Acceleration", "AccelerationInstantaneous"]},
{id: "AirHumidityDevice",                 label: "Air humidity device",              QK: ["AirHumidity"]},
{id: "AirPollutantDevice",                label: "Air pollutant device",             QK: ["AirPollution"]},   
{id: "AirThermometer",                    label: "Air thermometer",                  QK: ["AirTemperature"]},
{id: "AlcoholLevelDevice",                label: "Alcohol level device",             QK: ["AlcoholLevel"]},
{id: "AtmosphericPressureDevice",         label: "Atmospheric pressure device",      QK: ["AtmosphericPressure"]},
{id: "BloodPressureDevice",               label: "Blood pressure device",            QK: ["BloodPressure"]},
{id: "BoardThermometer",                  label: "Board thermometer",                QK: ["BoardTemperature"]},
{id: "BoardVoltageDevice",                label: "Board voltage device",             QK: ["Voltage"]},
{id: "BodyThermometer",                   label: "Body thermometer",                 QK: ["BodyTemperature"]},
{id: "CholesterolDevice",                 label: "Cholesterol device",               QK: ["Cholesterol"]},
{id: "Clock",                             label: "Clock",                            QK: ["Timestamp"]},
{id: "CloudCoverDevice",                  label: "Cloud cover device",               QK: ["CloudCover"]},
{id: "CO2Device",                         label: "CO2 device",                       QK: ["CO2"]}, 
{id: "ConductivityDevice",                label: "Conductivity device",              QK: ["Conductivity"]},
{id: "CODevice",                          label: "CO device",                        QK: ["ChemicalAgentAtmosphericConcentrationCO"]},
{id: "Counter",                           label: "Counter",                          QK: ["Count"]},
{id: "CurrentDevice",                     label: "Current device",                   QK: ["ElectricCurrent"]},
{id: "DeltaDewPointDevice",               label: "Delta dew point device",           QK: ["DewPoint, DewPointTemperature"]},
{id: "DeviceUptimeClock",                 label: "Device uptime clock",              QK: ["DeviceUptime"]},
{id: "DewPointDevice",                    label: "Dew point device",                 QK: ["DewPoint, DewPointTemperature"]},
{id: "DirectionOfArrivalDevice",          label: "Direction of arrival device",      QK: ["DirectionOfArrival"]},
{id: "DistanceNextVehicleDevice",         label: "Distance next vehicle device",     QK: ["DistanceNextVehicle"]},
{id: "DistanceDevice",                    label: "Distance device",                  QK: ["Distance"]},
{id: "DoorStateDevice",                   label: "Door state device",                QK: ["DoorStatus"]},
{id: "DustDevice",                        label: "Dust device",                      QK: ["ChemicalAgentAtmosphericConcentrationDust"]},
{id: "ElectricalDevice",                  label: "Electrical device",                QK: ["ElectricalResistance", "ElectricCharge", "ElectricCurrent", "ElectricField", "ElectricPotential", "ActivePower", "BatteryLevel", "Capacitance", "ReactivePower"]},
{id: "ElectricFieldDevice",               label: "Electric field device",            QK: ["ElectricField"]},
{id: "EnergyMeter",                       label: "Energy meter",                     QK: ["Energy"]},
{id: "FallDetector",                      label: "Fall detector",                    QK: ["Acceleration", "AccelerationInstantaneous"]},
{id: "FrequencyDevice",                   label: "Frequency device",                 QK: ["Frequency"]},
{id: "FuelLevel",                         label: "Fuel level",                       QK: ["FillLevel", "FillLevelGasTank"]},
{id: "FuelConsumptionDevice",             label: "Fuel consumption device",          QK: ["FuelConsumption", "FuelConsumptionInstantaneous", "FuelConsumptionTotal"]},
{id: "GasDetector",                       label: "Gas detector",                     QK: ["ChemicalAgentAtmosphericConcentration", "ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationCO", "ChemicalAgentAtmosphericConcentrationDust", "ChemicalAgentAtmosphericConcentrationNH3", "ChemicalAgentAtmosphericConcentrationNO", "ChemicalAgentAtmosphericConcentrationNO2", "ChemicalAgentAtmosphericConcentrationO3", "ChemicalAgentAtmosphericConcentrationSO2", "ChemicalAgentAtmosphericConcentrationVOC"]},
{id: "GaseousPollutantDevice",            label: "Gaseous pollutant device",         QK: ["AirPollution", "ChemicalAgentConcentration", "ChemicalAgentAtmosphericConcentration", "ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationCO", "ChemicalAgentAtmosphericConcentrationDust", "ChemicalAgentAtmosphericConcentrationNH3", "ChemicalAgentAtmosphericConcentrationNO", "ChemicalAgentAtmosphericConcentrationNO2", "ChemicalAgentAtmosphericConcentrationO3", "ChemicalAgentAtmosphericConcentrationSO2", "ChemicalAgentAtmosphericConcentrationVOC", "AirQuality"]},
{id: "Glucometer",                        label: "Glucometer",                       QK: ["BloodGlucose"]},
{id: "GPSDevice",                         label: "GPS device",                       QK: ["Position"]},
{id: "GyroscopeDevice",                   label: "Gyroscope device",                 QK: ["AngularSpeed", "RotationalSpeed", "Orientation"]},
{id: "HeartBeatDevice",                   label: "Heart beat device",                QK: ["HeartBeat"]},
{id: "HumanPresenceDetector",             label: "Human presence detector",          QK: ["Presence"]},
{id: "HumidityDevice",                    label: "Humidity device",                  QK: ["Humidity", "RelativeHumidity", "SoilHumidity", "AirHumidity"]},
{id: "Hydrophone",                        label: "Hydrophone",                       QK: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "ImageDevice",                       label: "Image device",                     QK: []},
{id: "LeafWetnessDevice",                 label: "Leaf wetness device",              QK: ["LeafWetness"]},
{id: "LightDevice",                       label: "Light device",                     QK: ["LuminousFlux", "LuminousIntensity", "Illuminance", "WeatherLuminosity"]},
{id: "LoRaInterfaceEnergyMeter",          label: "LoRa interface energy meter",      QK: ["Energy"]},
{id: "Magnetometer",                      label: "Magnetometer",                     QK: ["MagneticField", "MagneticFluxDensity"]},
{id: "MotionDevice",                      label: "Motion device",                    QK: ["Motion", "MotionState", "MotionStateVehicle"]},
{id: "NH3Device",                         label: "NH3 device",                       QK: ["ChemicalAgentAtmosphericConcentrationNH3"]},
{id: "NO2Device",                         label: "NO2 device",                       QK: ["ChemicalAgentAtmosphericConcentrationNO2"]},
{id: "NODevice",                          label: "NO device",                        QK: ["ChemicalAgentAtmosphericConcentrationNO"]},
{id: "O3Device",                          label: "O3 device",                        QK: ["ChemicalAgentAtmosphericConcentrationO3"]},
{id: "Odometer",                          label: "Odometer",                         QK: ["Mileage", "MileageDistanceToService", "MileageTotal"]},
{id: "OpticalDustDevice",                 label: "Optical dust device",              QK: ["ChemicalAgentAtmosphericConcentrationDust"]},
{id: "OxidationReductionPotentialDevice", label: "Oxidation reduction potential device", QK: ["Voltage"]},
{id: "OxygenDevice",                      label: "Oxygen device",                    QK: ["ChemicalAgentWaterConcentrationO2", "SPO2"]},
{id: "OtherDevice",                       label: "Other device",                     QK: []},
{id: "Pedometer",                         label: "Pedometer",                        QK: ["Speed", "SpeedAverage", "SpeedInstantaneous"]},
{id: "PeopleCountDevice",                 label: "People count device",              QK: ["Count", "CountPeople"]},
{id: "PHDevice",                          label: "PH device",                        QK: ["PH"]},
{id: "PrecipitationDevice",               label: "Precipitation device",             QK: ["Precipitation"]},
{id: "PresenceDetector",                  label: "Presence detector",                QK: ["Count", "Presence", "PresenceStatePeople", "PresenceStateParking"]},
{id: "PressureDevice",                    label: "Pressure device",                  QK: ["Pressure", "AtmosphericPressure"]},
{id: "ProximityDevice",                   label: "Proximity device",                 QK: ["Proximity"]},
{id: "PulseOxymeter",                     label: "Pulse oxymeter",                   QK: ["SPO2"]},
{id: "RadiationParticleDetector",         label: "Radiation particle detector",      QK: ["IonisingRadiation"]},
{id: "RainFallDevice",                    label: "Rain fall device",                 QK: ["RainFall"]},
{id: "RoadSurfaceThermometer",            label: "Road surface thermometer",         QK: ["Temperature", "RoadTemperature"]},
{id: "SaltMeter",                         label: "Salt meter",                       QK: ["Salinity", "Sodium"]},
{id: "Seismometer",                       label: "Seismometer",                      QK: ["Motion"]},
{id: "SkinConductanceDevice",             label: "Skin conductance device",          QK: ["Conductivity"]},
{id: "SmokeDetector",                     label: "Smoke detector",                   QK: ["ChemicalAgentAtmosphericConcentrationAirParticles", "ChemicalAgentAtmosphericConcentrationDust"]},
{id: "SO2Device",                         label: "SO2 device",                       QK: ["ChemicalAgentAtmosphericConcentrationSO2"]},
{id: "SoilHumidityDevice",                label: "Soil humidity device",             QK: ["Humidity", "RelativeHumidity", "SoilHumidity", "SoilMoistureTension"]},
{id: "SoilThermometer",                   label: "Soil thermometer",                 QK: ["Temperature", "SoilTemperature"]},
{id: "SolarRadiationDevice",              label: "Solar radiation device",           QK: ["SolarRadiation"]},
{id: "SoundDevice",                       label: "Sound device",                     QK: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "SpeedDevice",                       label: "Speed device",                     QK: ["Speed", "SpeedAverage", "SpeedInstantaneous"]},
{id: "SunPositionDirectionDevice",        label: "Sun position direction device",    QK: ["SunPositionDirection"]},
{id: "SunPositionElevationDevice",        label: "Sun position elevation device",    QK: ["SunPositionElevation"]},
{id: "Thermometer",                       label: "Thermometer",                      QK: ["AirTemperature", "BoardTemperature", "BodyTemperature", "BuildingTemperature", "DewPointTemperature", "FoodTemperature", "HouseholdApplianceTemperature", "RoadTemperature", "RoomTemperature", "SoilTemperature", "Temperature", "TemperatureEngine", "TemperatureWasteContainer", "WaterTemperature"]},
{id: "TimeOfArrivalNextVehicleDevice",    label: "Time of arrival next vehicle device", QK: ["TimeOfArrivalNextVehicle"]},
{id: "TimeOfArrivalDevice",               label: "Time of arrival device",           QK: ["TimeOfArrival"]},
{id: "TouchDevice",                       label: "Touch device",                     QK: ["SkinConductance", "Capacitance"]},
{id: "UltrasonicDevice",                  label: "Ultrasonic device",                QK: ["Sound", "SoundPressureLevel", "SoundPressureLevelAmbient"]},
{id: "VehicleCountDevice",                label: "Vehicle count device",             QK: ["Count", "CountAvailableVehicles", "CountEmptyDockingPoints","TrafficIntensity"]},
{id: "VehiclePresenceDetector",           label: "Vehicle presence detector",        QK: ["Count", "CountAvailableVehicles", "CountEmptyDockingPoints"]},
{id: "VisibilityDevice",                  label: "Visibility device",                QK: ["Visibility"]},
{id: "VOCDevice",                         label: "VOC device",                       QK: ["ChemicalAgentAtmosphericConcentrationVOC"]},
{id: "VoiceCommandDevice",                label: "Voice command device",             QK: ["VoiceCommand"]},
{id: "VoltageDevice",                     label: "Voltage device",                   QK: ["Voltage", "ElectricPotential"]},
{id: "WasteLevelDevice",                  label: "Waste level device",               QK: ["FillLevelWasteContainer"]},
{id: "WaterLevel",                        label: "Water level device",               QK: ["WaterLevel"]},
{id: "WaterConductivityDevice",           label: "Water conductivity device",        QK: ["Conductivity"]},
{id: "WaterNH4IonDevice",                 label: "Water NH4 ion device",             QK: ["ChemicalAgentWaterConcentrationNH4Ion"]},
{id: "WaterNO3IonDevice",                 label: "Water NO3 ion device",             QK: ["ChemicalAgentWaterConcentrationNO3Ion"]},
{id: "WaterO2IonDevice",                  label: "Water O2 ion device",              QK: ["ChemicalAgentWaterConcentrationO2"]},
{id: "WaterPHDevice",                     label: "Water PH device",                  QK: ["PH"]},
{id: "WaterPollutantDevice",              label: "Water pollutant device",           QK: ["ChemicalAgentWaterConcentration"]},
{id: "WaterThermometer",                  label: "Water thermometer",                QK: ["Temperature", "WaterTemperature"]},
{id: "WeightDevice",                      label: "Weight device",                    QK: ["Weight", "Mass"]},
{id: "WiFiInterfaceEnergyMeter",          label: "WiFi interface energy meter",      QK: ["Energy"]},
{id: "WindChillDevice",                   label: "Wind chill device",                QK: ["WindChill"]},
{id: "WindDirectionDevice",               label: "Wind direction device",            QK: ["WindDirection"]},
{id: "WindSpeedDevice",                   label: "Wind speed device",                QK: ["WindSpeed"]}
]

function getAll() {
  return dic
}

function getLabel(id) {
  const sds = dic.find(sd => sd.id == id)
  return sds? sds.label: ""
}

function getQKs(id) {
  const sds = dic.find(sd => sd.id == id)
  return sds? sds.QK.map(qkid => QuantityKinds.getQK(qkid)): []
}

var exports = {getAll, getLabel, getQKs}
export default exports 

