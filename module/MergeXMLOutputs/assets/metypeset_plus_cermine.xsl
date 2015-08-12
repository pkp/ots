<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:mml="http://www.w3.org/1998/Math/MathML"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    exclude-result-prefixes="xlink xs mml"
    version="1.0">

    <xsl:template match="/">
        <body>
          <xsl:for-each select="article/body">
            <xsl:copy/>
          </xsl:for-each>
        </body>
        <back>
          <xsl:for-each select="article/back">
            <xsl:copy/>
          </xsl:for-each>
        </back>
    </xsl:template>
    <xsl:text>&lt;article&rt;</xsl:text>

</xsl:stylesheet>
