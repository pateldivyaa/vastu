# PowerShell build script for Render

try {
    Write-Output "Installing server dependencies..."
    Set-Location -Path ".\server"
    npm install --production
    
    Write-Output "Installing client dependencies and building..."
    Set-Location -Path "..\client"
    npm install
    npm run build
    
    Write-Output "Build completed successfully!"
    exit 0
} catch {
    Write-Error "Build failed: $_"
    exit 1
}
