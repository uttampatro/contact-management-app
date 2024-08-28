## COVID-19 Dashboard

This web application provides a dashboard to visualize COVID-19 data, including global statistics and country-specific information.

### Features
- **Global Statistics**: View total cases, deaths, and recovered cases worldwide.
- **Historical Data**: Visualize COVID-19 case fluctuations over time with a line graph.
- **Country-Specific Data**: Explore detailed statistics for each country, including active cases, recovered cases, and deaths.
- **Interactive Map**: See a map with markers indicating country-specific COVID-19 data. Click on markers to view more details.
- **Responsive Design**: Optimized for both desktop and mobile views.

### Technologies Used
- **React**: For building the user interface.
- **Axios**: For making API requests.
- **React-Leaflet**: For displaying interactive maps.
- **Tailwind CSS**: For styling and responsive design.
- **Chart.js**: For rendering the line graph.

### API Endpoints
- **Global Data**: 
  - URL: [https://disease.sh/v3/covid-19/all](https://disease.sh/v3/covid-19/all)
  - Provides total cases, deaths, and recovered cases worldwide.
- **Country-Specific Data**:
  - URL: [https://disease.sh/v3/covid-19/countries](https://disease.sh/v3/covid-19/countries)
  - Provides COVID-19 data for each country including active cases, recovered cases, and deaths.
- **Historical Data**:
  - URL: [https://disease.sh/v3/covid-19/historical/all?lastdays=all](https://disease.sh/v3/covid-19/historical/all?lastdays=all)
  - Provides historical data for COVID-19 cases to visualize fluctuations over time.

### Getting Started
1. **Clone the Repository**
   ```bash
   git clone [https://github.com/your-username/your-repository.git](https://github.com/uttampatro/contact-management-app.git)
   ```

2. **Install Dependencies**
   ```bash
   cd your-repository
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

Feel free to adjust any details to better fit your specific application or project setup.
