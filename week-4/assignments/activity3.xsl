<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>products</h2>
          <xsl:for-each select="products/product">
            <h4>
              <xsl:value-of select="productName"/>
            </h4>
          </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>