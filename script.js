function showElement(hideElementId, showElementId) {
    document.getElementById(hideElementId).classList.add("hide");
    document.getElementById(showElementId).classList.remove("hide");
}

showElement("stage1", "stage2a");
showElement("stage1", "stage2b");
showElement("stage2a", "stage3a");
showElement("stage2a", "stage3b");
showElement("stage2b", "stage4a");
showElement('stage2b', 'stage4b')