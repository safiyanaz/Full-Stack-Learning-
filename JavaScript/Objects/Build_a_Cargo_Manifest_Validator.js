function normalizeUnits (manifest){
  const normalized = { ...manifest };
  if (manifest.unit === "lb"){
    normalized.weight = manifest.weight * 0.45;
    normalized.unit = "kg";
  }
  else{
    normalized.weight = manifest.weight;
    normalized.unit = "kg";
  }
  return normalized
}

function validateManifest(manifest){
  const validated = {};

  
  if (!Object.hasOwn(manifest, "containerId")){
    validated.containerId = "Missing";
  } else if (manifest.containerId <= 0 || manifest.containerId === null || !(Number.isInteger(manifest.containerId))|| Number.isNaN(manifest.containerId)){
    validated.containerId = "Invalid";
  } 

  
  if (!Object.hasOwn(manifest, "destination")){
    validated.destination = "Missing";
  } else if (!(typeof manifest.destination === "string") || manifest.destination.trim() === "") {
    validated.destination = "Invalid";
}

  
  if (!Object.hasOwn(manifest, "weight")){
    validated.weight = "Missing";
  }else if (manifest.weight <= 0 || manifest.weight === null || Number.isNaN(manifest.weight)){
    validated.weight = "Invalid";
  } 

  if (!Object.hasOwn(manifest, "unit")){
    validated.unit = "Missing";
  }else if (!(manifest.unit === "lb" || manifest.unit === "kg")){
    validated.unit = "Invalid";
  } 


  
  if (!Object.hasOwn(manifest, "hazmat")){
    validated.hazmat = "Missing";
  } else if (!(manifest.hazmat === true || manifest.hazmat === false)){
    validated.hazmat = "Invalid";
  } 

  return validated
} 


function processManifest(manifest){
  const containerId = manifest.containerId;
  const weight = normalizeUnits(manifest).weight;

  if (Object.keys(validateManifest(manifest)).length === 0){
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${weight} kg`);
  }
  else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
}





const a = { containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }
console.log(a)
processManifest(a);
