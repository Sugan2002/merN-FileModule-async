const fs = require('fs');

// Read file Asynchronously
try {
  const data = fs.readFile('file.txt', 'utf8');
  console.log('File content:', data);
} catch (error) {
  console.error('Error reading file:', error);
}

// Write to file Asynchronously
try {
  fs.writeFile('newfile.txt', 'Hello, World!', 'utf8');
  console.log('File written successfully');
} catch (error) {
  console.error('Error writing file:', error);
}





// Append to file Asynchronously
try {
  fs.appendFile('newfile.txt', '\nAppended content', 'utf8');
  console.log('Content appended successfully');
} catch (error) {
  console.error('Error appending to file:', error);
}

// Rename file Asynchronously
try {
  fs.rename('newfile.txt', 'renamedfile.txt');
  console.log('File renamed successfully');
} catch (error) {
  console.error('Error renaming file:', error);
}

// Delete file Asynchronously
try {
  fs.unlink('renamedfile.txt');
  console.log('File deleted successfully');
} catch (error) {
  console.error('Error deleting file:', error);
}

// Check if file exists Asynchronously
const fileExists = fs.exists('file.txt');
console.log('File exists:', fileExists);

// Get file information Asynchronously
try {
  const fileStats = fs.stat('file.txt');
  console.log('File size:', fileStats.size, 'bytes');
  console.log('File last modified:', fileStats.mtime);
} catch (error) {
  console.error('Error getting file information:', error);
}
