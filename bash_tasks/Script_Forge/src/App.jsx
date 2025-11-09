import { useState } from 'react';

function App() {
  const [folderName, setFolderName] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const generateBashScript = () => {
    setShowPreview(true);
  };

  const bashScript = `#!/bin/bash
# Bash Script Generator Output
# Generated on: ${new Date().toLocaleString()}

# Base directory in user's home
BASE_DIR="$HOME/my_bash_scripts"
FOLDER_NAME="${folderName || 'my-folder'}"
FILE_NAME="${fileName || 'my-file.txt'}"
FILE_CONTENT="${fileContent || 'Hello, World!'}"

# Create base directory if it doesn't exist
mkdir -p "$BASE_DIR"

# Create folder inside base directory if it doesn't exist
if [ ! -d "$BASE_DIR/$FOLDER_NAME" ]; then
    mkdir -p "$BASE_DIR/$FOLDER_NAME"
    echo "✓ Created folder: $BASE_DIR/$FOLDER_NAME"
else
    echo "✓ Folder already exists: $BASE_DIR/$FOLDER_NAME"
fi

# Create file with content
echo "$FILE_CONTENT" > "$BASE_DIR/$FOLDER_NAME/$FILE_NAME"
echo "✓ Created file: $BASE_DIR/$FOLDER_NAME/$FILE_NAME"

# Display success message
echo ""
echo "======================================"
echo "Script execution completed successfully!"
echo "======================================"
echo "Folder: $BASE_DIR/$FOLDER_NAME"
echo "File: $FILE_NAME"
echo "Content written successfully"
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bashScript);
    alert('Bash script copied to clipboard!');
  };

  const downloadScript = () => {
    const blob = new Blob([bashScript], { type: 'text/x-sh' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated_script.sh';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Bash Script Generator
          </h1>
          <p className="text-gray-400">
            Create custom bash scripts to generate folders and files in $HOME
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6 text-blue-400">
              Input Configuration
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Folder Name
                </label>
                <input
                  type="text"
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                  placeholder="e.g., my-project"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  File Name
                </label>
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="e.g., README.md"
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  File Content
                </label>
                <textarea
                  value={fileContent}
                  onChange={(e) => setFileContent(e.target.value)}
                  placeholder="Enter the content for your file..."
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                onClick={generateBashScript}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Generate Bash Script
              </button>
            </div>
            {showPreview && (
              <div className="mt-4 flex gap-4">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-[#0a0a0a] hover:bg-gray-800 text-gray-300 text-sm font-medium rounded-lg border border-gray-700 transition"
                >
                  Copy Script
                </button>
                <button
                  onClick={downloadScript}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition"
                >
                  Download Script
                </button>
              </div>
            )}
          </div>
          <div className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800">
            <h2 className="text-xl font-semibold text-purple-400 mb-4">
              Generated Script Preview
            </h2>
            {showPreview ? (
              <pre className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-800 overflow-x-auto text-sm leading-relaxed">
                <code className="text-gray-300">{bashScript}</code>
              </pre>
            ) : (
              <div className="flex items-center justify-center h-96 bg-[#0a0a0a] rounded-lg border border-gray-800">
                <div className="text-center">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-gray-500">
                    Click "Generate Bash Script" to see the preview
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
