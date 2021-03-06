'use strict'
import Units from './Units.js'
/* Quantity kind list
  Generated from FIESTA IoT ontology with this Jena SPARQL script:
  1 PREFIX qu:<http://purl.org/NET/ssnx/qu/qu#>
  2 PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
  3 PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
  4 SELECT (strafter(str(?subClass), "#") AS ?quantityKind)
  5 WHERE { ?subClass rdfs:subClassOf* ssn:SensorKind. } 
  $ bin/sparql --data=http://ontology.fiesta-iot.eu/ontologyDocs/fiesta-iot.owl --query=./rq --results=TSV
  Reference paper: R. Agarwal, D. Farnandez, T. Elsaleh, A.Gyrard, J. Lanza, L. Sanchez, N. Georgantas, V. Issarny, "Unified IoT Ontology to Enable Interoperability and Federation of Testbeds", 3rd IEEE WF-IoT, pp. 70-75, Reston USA, 12-14 December 2016
*/

const dic= [
{id: "Acceleration",                                       label: "Acceleration",                                 units: ["MetrePerSecondSquare"]},
{id: "AccelerationInstantaneous",                          label: "Acceleration instantaneous",                   units: ["MetrePerSecondSquare"]},
{id: "ActivePower",                                        label: "Active power",                                 units: ["Watt"]},
{id: "AirPollution",                                       label: "Air pollution",                                units: ["PartsPerBillion"]},
{id: "AirQuality",                                         label: "Air quality",                                  units: ["EAQI"]},
{id: "AirTemperature",                                     label: "Air temperature",                              units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "AirHumidity",                                        label: "Air humidity",                                 units: ["Percent"]},
{id: "AlcoholLevel",                                       label: "Alcohol level",                                units: ["Percent"]},
{id: "AngularSpeed",                                       label: "Angular speed",                                units: ["RadianPerSecond", "RevolutionsPerMinute"]},
{id: "AtmosphericPressure",                                label: "Atmospheric pressure",                         units: ["Pascal", "Bar", "Centibar", "Millibar", "MillimetreMercure"]},
{id: "BatteryLevel",                                       label: "Battery level",                                units: ["Volt", "Millivolt", "Microvolt"]},
{id: "BloodGlucose",                                       label: "Blood glucose",                                units: ["MmolPerLitre"]},
{id: "BloodPressure",                                      label: "Blood pressure",                               units: ["MmHg", "Pascal"]},
{id: "BoardTemperature",                                   label: "Board temperature",                            units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "BodyTemperature",                                    label: "Body temperature",                             units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "BuildingTemperature",                                label: "Building temperature",                         units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "Capacitance",                                        label: "Capacitance",                                  units: ["Farad"]},
{id: "ChemicalAgentAtmosphericConcentration",              label: "Chemical agent atmospheric concentration",     units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},
{id: "ChemicalAgentAtmosphericConcentrationAirParticles",  label: "Chemical agent atmospheric concentration air particles", units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]}, 
{id: "ChemicalAgentAtmosphericConcentrationCO",            label: "Chemical agent atmospheric concentration CO",  units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},   
{id: "ChemicalAgentAtmosphericConcentrationDust",          label: "Chemical agent atmospheric concentration Dust",units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},   
{id: "ChemicalAgentAtmosphericConcentrationNH3",           label: "Chemical agent atmospheric concentration NH3", units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},   
{id: "ChemicalAgentAtmosphericConcentrationNO",            label: "Chemical agent atmospheric concentration NO",  units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},  
{id: "ChemicalAgentAtmosphericConcentrationNO2",           label: "Chemical agent atmospheric concentration NO2", units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},   
{id: "ChemicalAgentAtmosphericConcentrationO3",            label: "Chemical agent atmospheric concentration O3",  units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},   
{id: "ChemicalAgentAtmosphericConcentrationSO2",           label: "Chemical agent atmospheric concentration SO2", units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},  
{id: "ChemicalAgentAtmosphericConcentrationVOC",           label: "Chemical agent atmospheric concentration VOC", units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},  
{id: "ChemicalAgentConcentration",                         label: "Chemical agent concentration",                 units: ["MicrogramPerCubicMetre", "MilligramPerCubicMetre", "PartsPerBillion", "PartsPerMillion"]},    
{id: "ChemicalAgentWaterConcentration",                    label: "Chemical agent water concentration",           units: ["MilligramPerLitre", "MilligramPerCubicMetre", "GramPerLitre"]},
{id: "ChemicalAgentWaterConcentrationNH4Ion",              label: "Chemical agent water concentration NH4 ion",   units: ["MilligramPerLitre", "MilligramPerCubicMetre", "GramPerLitre"]},   
{id: "ChemicalAgentWaterConcentrationNO3Ion",              label: "Chemical agent water concentration NO3 ion",   units: ["MilligramPerLitre", "MilligramPerCubicMetre", "GramPerLitre"]},   
{id: "ChemicalAgentWaterConcentrationO2",                  label: "Chemical agent water concentration O2",        units: ["MilligramPerLitre", "MilligramPerCubicMetre", "GramPerLitre"]},
{id: "Cholesterol",                                        label: "Cholesterol",                                  units: ["MmolPerLitre", "MilligramPerDecilitre", "MilligramPerLitre"]},
{id: "CloudCover",                                         label: "Cloud cover",                                  units: ["Okta"]},
{id: "CO2",                                                label: "CO2",                                          units: ["PartsPerMillion", "Percent"]},
{id: "Conductivity",                                       label: "Conductivity",                                 units: ["SiemensPerMetre"]},
{id: "Count",                                              label: "Count",                                        units: ["Dimensionless"]},
{id: "CountAvailableVehicles",                             label: "Count available vehicles",                     units: ["Dimensionless"]},
{id: "CountEmptyDockingPoints",                            label: "Count empty docking points",                   units: ["Dimensionless"]},
{id: "CountPeople",                                        label: "Count people",                                 units: ["Dimensionless"]},
{id: "DeltaDewPoint",                                      label: "Delta dew point",                              units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "DeviceUptime",                                       label: "Device uptime",                                units: ["SecondTime", "MinuteTime", "Hour", "Year"]},
{id: "DewPoint",                                           label: "Dew point",                                    units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "DewPointTemperature",                                label: "Dew point temperature",                        units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "DirectionOfArrival",                                 label: "Direction of arrival",                         units: ["DegreeAngle", "Radian"]},
{id: "Distance",                                           label: "Distance",                                     units: ["Metre", "Kilometre", "Millimetre", "Centimetre"]},
{id: "DistanceNextVehicle",                                label: "Distance next vehicle",                        units: ["Metre", "Kilometre", "Millimetre", "Centimetre"]},
{id: "DoorStatus",                                         label: "Door status",                                  units: ["Dimensionless"]},
{id: "ElectricalResistance",                               label: "Electrical resistance",                        units: ["Ohm"]},
{id: "ElectricCharge",                                     label: "Electric charge",                              units: ["Coulomb"]},
{id: "ElectricCurrent",                                    label: "Electric current",                             units: ["Ampere"]},
{id: "ElectricField",                                      label: "Electric field",                               units: ["VoltPerMeter"]},
{id: "ElectricPotential",                                  label: "Electric potential",                           units: ["Volt"]},
{id: "Energy",                                             label: "Energy",                                       units: ["Joule", "KiloWattHour"]},
{id: "FillLevel",                                          label: "Fill level",                                   units: ["Percent"]},
{id: "FillLevelGasTank",                                   label: "Fill level gas tank",                          units: ["Percent "]}, 
{id: "FillLevelWasteContainer",                            label: "Fill level waste container",                   units: ["Percent "]},
{id: "FoodTemperature",                                    label: "Food temperature",                             units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "Frequency",                                          label: "Frequency",                                    units: ["Hertz"]},
{id: "FuelConsumption",                                    label: "Fuel consumption",                             units: ["Litre", "LitrePer100Kilometres"]},
{id: "FuelConsumptionInstantaneous",                       label: "Fuel consumption instantaneous",               units: ["Litre", "LitrePer100Kilometres"]},
{id: "FuelConsumptionTotal",                               label: "Fuel consumption total",                       units: ["Litre", "LitrePer100Kilometres"]},
{id: "HeartBeat",                                          label: "Heart beat",                                   units: ["BeatPerMinute"]},
{id: "HouseholdApplianceTemperature",                      label: "Household appliance temperature",              units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "Humidity",                                           label: "Humidity",                                     units: ["Percent"]},
{id: "Illuminance",                                        label: "Illuminance",                                  units: ["Lux"]},
{id: "IonisingRadiation",                                  label: "Ionising radiation",                           units: ["RadiationParticlesPerMinute"]},
{id: "LeafWetness",                                        label: "Leaf wetness",                                 units: []},
{id: "LuminousFlux",                                       label: "Luminous flux",                                units: ["Lumen"]},
{id: "LuminousIntensity",                                  label: "Luminous intensity",                           units: ["Candela"]},
{id: "MagneticField",                                      label: "Magnetic field",                               units: ["Tesla"]},
{id: "MagneticFluxDensity",                                label: "Magnetic flux density",                        units: ["Weber"]},
{id: "Mass",                                               label: "Mass",                                         units: ["Kilogram", "Gram"]},
{id: "Mileage",                                            label: "Mileage",                                      units: ["Metre", "Kilometre"]},
{id: "MileageDistanceToService",                           label: "Mileage distance to service",                  units: ["Metre", "Kilometre"]},  
{id: "MileageTotal",                                       label: "Mileage total",                                units: ["Metre", "Kilometre"]},
{id: "Motion",                                             label: "Motion",                                       units: ["Dimensionless"]},
{id: "MotionState",                                        label: "Motion state",                                 units: ["Dimensionless"]},
{id: "MotionStateVehicle",                                 label: "Motion state vehicle",                         units: ["Dimensionless"]},
{id: "Orientation",                                        label: "Orientation",                                  units: ["DegreeAngle", "Radian"]},
{id: "Other",                                              label: "Other",                                        units: ["Other"]},
{id: "PH",                                                 label: "PH",                                           units: ["Dimensionless"]},
{id: "Position",                                           label: "Position",                                     units: ["Meter", "Kilometer"]},
{id: "Power",                                              label: "Power",                                        units: ["Watt"]},
{id: "Precipitation",                                      label: "Precipitation",                                units: ["Millilitre"]},
{id: "Presence",                                           label: "Presence",                                     units: ["Dimensionless"]},
{id: "PresenceStateParking",                               label: "Presence state parking",                       units: ["Dimensionless"]},
{id: "PresenceStatePeople",                                label: "Presence state people",                        units: ["Dimensionless"]},
{id: "Pressure",                                           label: "Pressure",                                     units: ["Pascal", "Bar", "Centibar", "Millibar", "MmHg"]},
{id: "Proximity",                                          label: "Proximity",                                    units: ["Meter", "Dimensionless"]},
{id: "Rainfall",                                           label: "Rainfall",                                     units: ["Millilitre"]},
{id: "ReactivePower",                                      label: "Reactive power",                               units: ["VoltAmpereReactive"]},
{id: "RelativeHumidity",                                   label: "Relative humidity",                            units: ["Percent"]},
{id: "RoadTemperature",                                    label: "Road temperature",                             units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "RoomTemperature",                                    label: "Room temperature",                             units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "RotationalSpeed",                                    label: "Rotational speed",                             units: ["RadianPerSecond", "DegreeAnglePerSecond"]},
{id: "Salinity",                                           label: "Salinity",                                     units: ["MilligramPerLitre", "PartsPerMillion"]},
{id: "SkinConductance",                                    label: "Skin conductance",                             units: ["MicroSiemens"]},
{id: "SoilHumidity",                                       label: "Soil humidity",                                units: ["Percent"]},
{id: "SoilMoistureTension",                                label: "Soil moisture tension",                        units: ["KiloPascal", "Bar"]},
{id: "SoilTemperature",                                    label: "Soil temperature",                             units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "SolarRadiation",                                     label: "Solar radiation",                              units: ["WattPerSquareMetre"]},
{id: "Sound",                                              label: "Sound",                                        units: ["Decibel", "DecibelA"]},
{id: "SoundPressureLevel",                                 label: "Sound pressure level",                         units: ["Pascal"]},
{id: "SoundPressureLevelAmbient",                          label: "Sound pressure level ambient",                 units: ["Pascal"]},
{id: "Speed",                                              label: "Speed",                                        units: ["MetrePerSecond", "KilometrePerHour", "MillimetrePerHour"]},
{id: "SpeedAverage",                                       label: "Speed average",                                units: ["MetrePerSecond", "KilometrePerHour", "MillimetrePerHour"]},
{id: "SpeedInstantaneous",                                 label: "Speed instantaneous",                          units: ["MetrePerSecond", "KilometrePerHour", "MillimetrePerHour"]},
{id: "SPO2",                                               label: "SPO2",                                         units: ["Percent"]},
{id: "SunPositionDirection",                               label: "Sun position direction",                       units: ["DegreeAngle", "Radian"]},
{id: "SunPositionElevation",                               label: "Sun position elevation",                       units: ["DegreeAngle", "Radian"]},
{id: "Temperature",                                        label: "Temperature",                                  units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "TemperatureEngine",                                  label: "Temperature engine",                           units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "TemperatureWasteContainer",                          label: "Temperature waste container",                  units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "TimeOfArrival",                                      label: "Time of arrival",                              units: ["SecondTime", "MinuteTime", "HourTime"]},
{id: "TimeOfArrivalNextVehicle",                           label: "Time of arrival next vehicle",                 units: ["SecondTime", "MinuteTime", "HourTime"]},
{id: "Timestamp",                                          label: "Timestamp",                                    units: ["SecondTime", "MinuteTime", "HourTime"]},
{id: "TrafficIntensity",                                   label: "Traffic intensity",                            units: ["Hertz"]},
{id: "Visibility",                                         label: "Visibility",                                   units: ["Metre"]},
{id: "VoiceCommand",                                       label: "Voice command",                                units: ["Dimensionless"]},
{id: "Voltage",                                            label: "Voltage",                                      units: ["Volt"]},
{id: "WaterLevel",                                         label: "Water level",                                  units: ["Percent", "Metre", "Centimetre", "Millimetre"]},
{id: "WaterTemperature",                                   label: "Water temperature",                            units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "WeatherLuminosity",                                  label: "Weather luminosity",                           units: []},
{id: "WeatherPrecipitation",                               label: "Weather precipitation",                        units: ["Millilitre"]},
{id: "Weight",                                             label: "Weight",                                       units: ["Kilogram", "Gram"]},
{id: "WindChill",                                          label: "Wind chill",                                   units: ["DegreeCelsius", "DegreeFahrenheit"]},
{id: "WindDirection",                                      label: "Wind direction",                               units: ["DegreeAngle", "Radian"]},
{id: "WindSpeed",                                          label: "Wind speed",                                   units: ["MetrePerSecond", "KilometrePerHour"]},
{id: "WorkingState",                                       label: "Working state",                                units: ["Dimensionless"]}
] 

function getAll() {
  return dic
}

function getQK(id) {
  return dic.find(sd => sd.id == id)
}

function getLabel(id) {
  const qk = dic.find(sd => sd.id == id)
  return qk? qk.label: ""
}

function getUnits(id) {
  const qk = dic.find(sd => sd.id == id)
  return qk? qk.units.map(uid => Units.getUnit(uid)).filter(u => u != undefined): []
}

var exports = {getAll, getQK, getUnits, getLabel}
export default exports 

