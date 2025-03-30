import { Divider } from 'antd'
import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return <footer>
    <div className="footer">
        <div className="container">
            <Divider/>
            <p className="footer-text">
                Vihar360 &copy; {currentYear} - All Rights Reserved
            </p>
        </div>
    </div>
  </footer>
}
