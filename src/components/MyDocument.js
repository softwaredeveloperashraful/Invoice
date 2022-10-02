import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View
} from "@react-pdf/renderer";
import React from "react";

// Create styles
const Quixote = ({data}) =>{


const {companyDetails, billDetails, description, amount} = data[0];
  return (
    <Document style={{ height: "877px", width: "620px" }}>
    <Page
      style={{
        padding: "30px"
      }}
    >
      {/* COMPANY AND INVOICE PART */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            style={{
              fontSize: "25px",
              color: "rgb(14, 14, 139)",
              fontWeight: "bold",
            }}
          >
            {companyDetails[0].name}
          </Text>
          <Text style={{ fontSize: "10px" }}>[{companyDetails[0].address}]</Text>
          <Text style={{ fontSize: "10px" }}>[{companyDetails[0].city}]</Text>
          <Text style={{ fontSize: "10px" }}>Phone: [{companyDetails[0].phone}]</Text>
          <Text style={{ fontSize: "10px" }}>Fax: [{companyDetails[0].fax}]</Text>
          <Text style={{ fontSize: "10px" }}>Website: {companyDetails[0].website}</Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: "25px",
              color: "rgb(14, 14, 139)",
              fontWeight: 700,
            }}
          >
            INVOICE
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: "9px" }}>DATE</Text>
              <Text style={{ fontSize: "9px" }}>INVOICE # </Text>
              <Text style={{ fontSize: "9px" }}>CUSTOMER ID </Text>
              <Text style={{ fontSize: "9px" }}>DUE DATE</Text>
            </View>
            <View style={{ border: "1px solid gray", marginLeft: "3px" }}>
              <Text
                style={{
                  fontSize: "9px",
                  borderBottom: "1px solid gray",
                  padding: "0 2px",
                }}
              >
                12/09/2022
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "9px",
                  borderBottom: "1px solid gray",
                  padding: "0px 2px",
                }}
              >
                [123456]
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "9px",
                  borderBottom: "1px solid gray",
                  padding: "0px 2px",
                }}
              >
                <Text>[123]</Text>
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: "9px",
                  backgroundColor: "rgb(192, 192, 238)",
                  padding: "0px 2px",
                }}
              >
                <Text>1/09/2022</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* BILL TO Part */}
      <View style={{ marginTop: "40px" }}>
        <Text
          style={{
            color: "white",
            fontSize: "13px",
            backgroundColor: "rgb(56, 56, 141)",
            width: "45%",
            paddingLeft: "12px",
          }}
        >
          BILL TO
        </Text>
        <View style={{ paddingLeft: "12px" }}>
          <Text style={{ fontSize: "9px" }}>[{billDetails[0].name}]</Text>
          <Text style={{ fontSize: "9px" }}>[{billDetails[0].company}]</Text>
          <Text style={{ fontSize: "9px" }}>[{billDetails[0].address}]</Text>
          <Text style={{ fontSize: "9px" }}>[{billDetails[0].city}]</Text>
          <Text style={{ fontSize: "9px" }}>[{billDetails[0].phone}]</Text>
        </View>
      </View>
      {/* TABLE PART */}
      <View style={{ marginTop: "40px" }}>
        <View style={{ border: "1px solid gray" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "70%", borderRight: "1px solid gray" }}>
              <Text
                style={{
                  backgroundColor: "rgb(65, 65, 165)",
                  color: "white",
                  padding: "2px 0",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                DESCRIPTION
              </Text>
              {description && description.map((item, index)=>(
                <Text
                key={index}
                style={item.id % 2 === 0 ? {
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                } : {
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                {item.cell}
              </Text>
              )) 
                }
            </View>
            <View style={{ width: "13%", borderRight: "1px solid gray" }}>
              <Text
                style={{
                  backgroundColor: "rgb(65, 65, 165)",
                  color: "white",
                  fontSize: "13px",
                  padding: "2px 0",
                  textAlign: "center",
                }}
              >
                TAXED
              </Text>
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              ></Text>
              <Text
                style={{
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              ></Text>
              <Text
                style={{
                  fontSize: "19px",
                  textAlign: "center",
                  backgroundColor: "rgb(226, 226, 226)",
                  height: "auto",
                }}
              >
                ×
              </Text>
              
              <Text
                style={{
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text style={{ paddingLeft: "15px" }}>
                <Text></Text>
              </Text>
            </View>
            <View style={{ width: "17%", textAlign: "center" }}>
              <Text
                style={{
                  backgroundColor: "rgb(65, 65, 165)",
                  color: "white",
                  display: "flex",
                  padding: "2px 0",
                  fontSize: "13px",
                  justifyContent: "center",
                }}
              >
                AMOUNT
              </Text>
                {amount && amount.map((item, index)=>(
                  <Text
                  style={item.id % 2 === 0 ? {
                    padding: "2px 0 0 15px",
                    fontSize: "12px",
                    height: "20px",
                  } : {
                    backgroundColor: "rgb(226, 226, 226)",
                    padding: "2px 0 0 15px",
                    fontSize: "12px",
                    height: "20px",
                  }}
                >
                  {item.price}
                </Text>
                ))

                }
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text
                style={{
                  backgroundColor: "rgb(226, 226, 226)",
                  padding: "2px 0 0 15px",
                  fontSize: "12px",
                  height: "20px",
                }}
              >
                <Text></Text>
              </Text>
              <Text style={{ paddingLeft: "15px" }}>
                <Text></Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              width: "65%",
              marginTop: "20px",
              border: "1px solid gray",
              height: "130px",
            }}
          >
            <Text
              style={{
                color: "white",
                padding: "2px 15px",
                backgroundColor: "rgb(14, 14, 139)",
                fontSize: "13px",
              }}
            >
              OTHER COMMENTS
            </Text>
            <View style={{ listStyleType: "decimal", padding: "6px 0 0 5px" }}>
              <Text style={{ fontSize: "12px", paddingBottom: "4px" }}>
                1. Total payment due in 30 days
              </Text>
              <Text style={{ fontSize: "12px" }}>
                2. Please include the invoice number on your check.
              </Text>
            </View>
          </View>
          <View style={{ width: "30%" }}>
          
            <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: "2px solid gray",
              marginBottom: "1px"
            }}
            >
              <View style={{}}>
                <Text style={{ fontSize: "12px", paddingBottom: "2px" }}>
                  Subtotal
                </Text>
                <Text style={{ fontSize: "12px", paddingBottom: "2px" }}>
                  Taxable
                </Text>
                <Text style={{ fontSize: "12px", paddingBottom: "2px" }}>
                  Tax rate
                </Text>
                <Text style={{ fontSize: "12px", paddingBottom: "2px" }}>
                  Tax due
                </Text>
                <Text style={{ fontSize: "12px" }}>Other</Text>
              </View>
              <View style={{textAlign: "center"}}>
                <Text style={{ fontSize: "12px", paddingBottom: "2px", width: "80px" }}>2,141.362</Text>
                <Text style={{ fontSize: "12px", paddingBottom: "2px", width: "80px" }}>350.00</Text>
                <Text style={{ fontSize: "12px", padding: "4px 0 2px 0", border: "1px solid gray", width: "80px" }}>6.250%</Text>
                <Text style={{ fontSize: "12px", paddingBottom: "2px", width: "80px" }}>21.65</Text>
                <Text style={{ fontSize: "12px", borderTop: "1px solid gray",
                    borderLeft: "1px solid gray",
                    borderRight: "1px solid gray", width: "80px"}}> - </Text>
              </View>
            </View>
          
          <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderTop: "2px solid gray"
            }}>
            <View>
              <Text style={{fontWeight: 700}}>Total</Text>
            </View>
            <View><Text >$ 2,646.85</Text></View>
          </View>
          <View
              style={{
                display: "inline-flex",
                flexDirection: "column",
                paddingTop: "15px"}}
            >
              <Text style={{fontSize: "12px"}}>Make all checks payable to</Text>
              <Text style={{fontWeight: 700, fontSize: "14px", textAlign: "center"}}>[Your Company Name]</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: "40px"}}>
          <Text style={{fontSize: "10px", textAlign: "center"}}>If you have any question about this invoice, Please contact.</Text>
          <Text style={{fontSize: "10px", textAlign: "center"}}>[Name, Phone #, E-mail]</Text>
          <Text style={{fontSize: "14px", textAlign: "center", fontWeight: 900}}>Thank You For Your Business!
      
          </Text>
        </View>
        <View
        style={{marginTop: "40px", flexDirection: "row", justifyContent: "space-between"}}
      >
          <Text style={{fontSize: "8px"}}>https://www.clonestudio.bd.com/excel/Templates.html</Text>
          <Text  style={{fontSize: "8px"}}>Invoice Template @copy; 2020-2021 by Clone Studio.</Text>
      </View>
      </View>
      {/* TOTAL CALCULATE PART */}

      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        fixed
      />
    </Page>
  </Document>
  )
};

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Quixote;
