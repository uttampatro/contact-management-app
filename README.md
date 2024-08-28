## COVID-19 Dashboard

This web application provides a dashboard to visualize COVID-19 data, manage contacts, and view detailed statistics and interactive maps.

### Features

#### Contacts Page
- **Add New Contacts**: A form to add new contacts to the list.
- **View Contacts**: Display a list of all added contacts.
- **Edit and Delete**: Functionality to edit and delete existing contacts.
- **State Management**: Uses Redux to store and manage contact data.

#### Charts and Maps Page
- **Line Graph**: Visualize COVID-19 case fluctuations over time.
- **Interactive Map**: Displays a map with markers indicating COVID-19 data for each country. Markers show the country name, and statistics such as active cases, recovered cases, and deaths.
- **Responsive Design**: Adaptable layout for both desktop and mobile views.

### Technologies Used
- **React**: For building the user interface.
- **Redux**: For state management of contact data.
- **Axios**: For making API requests.
- **React-Leaflet**: For displaying interactive maps.
- **Chart.js**: For rendering the line graph.
- **Tailwind CSS**: For styling and responsive design.

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
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Install Dependencies**
   ```bash
   cd contact-management-app
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
