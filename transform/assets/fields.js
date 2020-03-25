let datasets = [];
let used = [];
let uses = [];
let owner = [];
let licence = [];
let personalInfo = [];
let ownerName = [];
let datasetID = [];

createAllRDF = (dataset) => {
    createDatasetRDF(datasets, dataset);
    createDatasetIDRDF(datasetID, dataset);
    createUsedRDF(used, dataset);
    createUsesRDF(uses, dataset);
    createOwnerRDF(owner, dataset);
    createLicenceRDF(licence, dataset);
    createPersonalInfoRDF(personalInfo, dataset);
    createOwnerNameRDF(ownerName, dataset);
}

writeAlltoPage = () => {
    writeToPage(datasets)
    writeToPage(datasetID)
    writeToPage(used)
    writeToPage(uses)
    writeToPage(owner)
    writeToPage(licence)
    writeToPage(personalInfo)
    writeToPage(ownerName)
}

createDatasetRDF = (array, input) => {
    let s = '<' + input.datasetID + '>';
    let p = "<name>";
    let o = '"' + input.datasetName + '"';
    let RDF = createRDF(s, p, o);
    array.push(RDF);
    return array;
}

createDatasetIDRDF = (array, input) => {
    let s = '<' + input.datasetID + '>';
    let p = "<rdf:type>";
    let o = '<dataset>';
    let RDF = createRDF(s, p, o);
    array.push(RDF);
    return array;
}

createUsedRDF = (array, input) => {
    if (input.usedBy != "") {
        let s = '<' + input.datasetID + '>';
        let p = "<usedBy>";
        let o = '<' + input.usedBy + '>';
        let RDF = createRDF(s, p, o);
        array.push(RDF);
        return array;
    }
}

createUsesRDF = (array, input) => {
    if (input.uses != "") {
        let s = '<' + input.datasetID + '>';
        let p = "<uses>";
        let o = '<' + input.uses + '>';
        let RDF = createRDF(s, p, o);
        array.push(RDF);
        return array;
    }
}

createOwnerRDF = (array, input) => {
    if (input.ownerID != "") {
        let s = '<' + input.datasetID + '>';
        let p = "<ownerID>";
        let o = '<' + input.ownerID + '>';
        let RDF = createRDF(s, p, o);
        array.push(RDF);
        return array;
    }
}

createLicenceRDF = (array, input) => {
    if (input.licence != "") {
        let s = '<' + input.datasetID + '>';
        let p = "<licence>";
        let o = '<' + input.licence + '>';
        let RDF = createRDF(s, p, o);
        array.push(RDF);
        return array;
    }
}

createPersonalInfoRDF = (array, input) => {
    if (input.pii != "") {
        let s = '<' + input.datasetID + '>';
        let p = "<pii>";
        let o = '<' + input.pii + '>';
        let RDF = createRDF(s, p, o);
        array.push(RDF);
        return array;
    }
}

createOwnerNameRDF = (array, input) => {
    if (input.ownerName != "") {
        let s = '<' + input.ownerID + '>';
        let p = "<ownerName>";
        let o = '"' + input.ownerName + '"';
        let RDF = createRDF(s, p, o);
        array.push(RDF);
        return array;
    }
}