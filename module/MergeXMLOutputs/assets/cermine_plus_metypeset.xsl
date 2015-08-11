<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:mml="http://www.w3.org/1998/Math/MathML"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    exclude-result-prefixes="xlink xs mml"
    version="1.0">

    <xsl:template match="/">
      <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE article PUBLIC "-//NLM//DTD Journal Archiving and Interchange DTD v2.3 20070202//EN" "archivearticle.dtd"&rt;&lt;article xmlns:xlink="http://www.w3.org/1999/xlink" article-type="research-article"&rt;</xsl:text>
        <front>
          <xsl:for-each select="article/front">
            <xsl:copy/>
          </xsl:for-each>
        </front>

</xsl:stylesheet>
