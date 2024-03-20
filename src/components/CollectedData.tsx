import React from 'react'




const CollectedData: React.FC = () => {
  return (
    <div className='collectedData_container'>
        <table>
          <thead>
            <tr>Original Link</tr>
            <tr>Shortened Link</tr>
            <tr>QR Code</tr>
          </thead>
          <tbody>
            <tr>
              <td>https://www.google.com</td>
              <td>https://link.ly/123456</td>
              <td>QR Code</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default CollectedData;