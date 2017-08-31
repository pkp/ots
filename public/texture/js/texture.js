(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('substance')) :
	typeof define === 'function' && define.amd ? define(['exports', 'substance'], factory) :
	(factory((global.texture = global.texture || {}),global.substance));
}(this, (function (exports,substance) { 'use strict';

var JATSArchivingData = {"start":"article","elements":{"abbrev":{"name":"abbrev","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"alt":{"name":"alt"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"abbrev","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","def"]}}}},"abbrev-journal-title":{"name":"abbrev-journal-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"abbrev-type":{"name":"abbrev-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"abbrev-journal-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"abstract":{"name":"abstract","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"abstract-type":{"name":"abstract-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"abstract","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}}]}}},"access-date":{"name":"access-date","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"access-date","content":{"type":"*","block":{"type":"|","blocks":["TEXT","day","era","month","season","year","x"]}}}},"ack":{"name":"ack","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"content-type":{"name":"content-type"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"ack","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}}]}}},"addr-line":{"name":"addr-line","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"addr-line","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","city","country","fax","institution","institution-wrap","phone","postal-code","state"]}}}},"address":{"name":"address","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"address","content":{"type":"*","block":{"type":"|","blocks":["addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri","label","x"]}}}},"aff":{"name":"aff","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"aff","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","label"]}}}},"aff-alternatives":{"name":"aff-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"aff-alternatives","content":{"type":"+","block":"aff"}}},"ali:free_to_read":{"name":"ali:free_to_read","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"end_date":{"name":"end_date"},"start_date":{"name":"start_date"}},"elements":{"name":"ali:free_to_read","content":{"type":",","blocks":[]}}},"ali:license_ref":{"name":"ali:license_ref","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"start_date":{"name":"start_date"}},"elements":{"name":"ali:license_ref","content":"TEXT"}},"alt-text":{"name":"alt-text","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"alt-text","content":"TEXT"}},"alt-title":{"name":"alt-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"alt-title-type":{"name":"alt-title-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"alt-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"alternatives":{"name":"alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"alternatives","content":{"type":"+","block":{"type":"|","blocks":["array","chem-struct","code","graphic","inline-graphic","inline-supplementary-material","media","preformat","private-char","supplementary-material","table","oasis:table","textual-form","tex-math","mml:math"]}}}},"annotation":{"name":"annotation","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"annotation","content":{"type":"+","block":"p"}}},"anonymous":{"name":"anonymous","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"anonymous","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"app":{"name":"app","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"app","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}},{"type":"?","block":"permissions"}]}}},"app-group":{"name":"app-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"app-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":{"type":"|","blocks":["app","ref-list"]}}]}}},"array":{"name":"array","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"orientation":{"name":"orientation"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"array","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"|","blocks":[{"type":"*","block":{"type":"|","blocks":["alternatives","graphic","media"]}},"tbody","oasis:tbody"]},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"article":{"name":"article","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"article-type":{"name":"article-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"dtd-version":{"name":"dtd-version"}},"elements":{"name":"article","content":{"type":",","blocks":["front",{"type":"?","block":"body"},{"type":"?","block":"back"},{"type":"?","block":"floats-group"},{"type":"|","blocks":[{"type":"*","block":"sub-article"},{"type":"*","block":"response"}]}]}}},"article-categories":{"name":"article-categories","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"article-categories","content":{"type":",","blocks":[{"type":"*","block":"subj-group"},{"type":"*","block":"series-title"},{"type":"*","block":"series-text"}]}}},"article-id":{"name":"article-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"article-id","content":"TEXT"}},"article-meta":{"name":"article-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"article-meta","content":{"type":",","blocks":[{"type":"*","block":"article-id"},{"type":"?","block":"article-categories"},{"type":"?","block":"title-group"},{"type":"*","block":{"type":"|","blocks":["contrib-group","aff","aff-alternatives","x"]}},{"type":"?","block":"author-notes"},{"type":"*","block":"pub-date"},{"type":"*","block":"volume"},{"type":"*","block":"volume-id"},{"type":"?","block":"volume-series"},{"type":"*","block":"issue"},{"type":"*","block":"issue-id"},{"type":"*","block":"issue-title"},{"type":"*","block":"issue-sponsor"},{"type":"?","block":"issue-part"},{"type":"*","block":"volume-issue-group"},{"type":"*","block":"isbn"},{"type":"?","block":"supplement"},{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":{"type":",","blocks":["fpage",{"type":"?","block":"lpage"}]}},{"type":"?","block":"page-range"}]},"elocation-id"]}},{"type":"*","block":{"type":"|","blocks":["email","ext-link","uri","product","supplementary-material"]}},{"type":"?","block":"history"},{"type":"?","block":"permissions"},{"type":"*","block":"self-uri"},{"type":"*","block":{"type":"|","blocks":["related-article","related-object"]}},{"type":"*","block":"abstract"},{"type":"*","block":"trans-abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":"funding-group"},{"type":"*","block":"conference"},{"type":"?","block":"counts"},{"type":"?","block":"custom-meta-group"}]}}},"article-title":{"name":"article-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"article-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"attrib":{"name":"attrib","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"attrib","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"author-comment":{"name":"author-comment","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"author-comment","content":{"type":",","blocks":[{"type":"?","block":"title"},{"type":"+","block":"p"}]}}},"author-notes":{"name":"author-notes","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"}},"elements":{"name":"author-notes","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["corresp","fn","p","x"]}}]}}},"award-group":{"name":"award-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"award-type":{"name":"award-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"award-group","content":{"type":",","blocks":[{"type":"*","block":"funding-source"},{"type":"*","block":"award-id"},{"type":"*","block":"principal-award-recipient"},{"type":"*","block":"principal-investigator"}]}}},"award-id":{"name":"award-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"award-type":{"name":"award-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"award-id","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"back":{"name":"back","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"back","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"*","block":"title"},{"type":"*","block":{"type":"|","blocks":["ack","app-group","bio","fn-group","glossary","ref-list","notes","sec"]}}]}}},"bio":{"name":"bio","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"bio","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}}]}}},"body":{"name":"body","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"body","content":{"type":",","blocks":[{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"?","block":"sig-block"}]}}},"bold":{"name":"bold","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"bold","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"boxed-text":{"name":"boxed-text","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"boxed-text","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"break":{"name":"break","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"break","content":{"type":",","blocks":[]}}},"caption":{"name":"caption","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"style":{"name":"style"}},"elements":{"name":"caption","content":{"type":",","blocks":[{"type":"?","block":"title"},{"type":"*","block":"p"}]}}},"chapter-title":{"name":"chapter-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"chapter-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"chem-struct":{"name":"chem-struct","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"chem-struct","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","object-id","label","def-list","list","array","code","graphic","media","preformat"]}}}},"chem-struct-wrap":{"name":"chem-struct-wrap","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"chem-struct-wrap","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"+","block":{"type":"|","blocks":["alternatives","chem-struct","code","graphic","media","preformat","textual-form"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"citation-alternatives":{"name":"citation-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"citation-alternatives","content":{"type":"+","block":{"type":"|","blocks":["element-citation","mixed-citation","nlm-citation"]}}}},"city":{"name":"city","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"city","content":{"type":"*","block":"TEXT"}}},"code":{"name":"code","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"code-type":{"name":"code-type"},"code-version":{"name":"code-version"},"executable":{"name":"executable"},"language":{"name":"language"},"language-version":{"name":"language-version"},"platforms":{"name":"platforms"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"}},"elements":{"name":"code","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"col":{"name":"col","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"span":{"name":"span"},"width":{"name":"width"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"col","content":{"type":",","blocks":[]}}},"colgroup":{"name":"colgroup","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"span":{"name":"span"},"width":{"name":"width"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"colgroup","content":{"type":"*","block":"col"}}},"collab":{"name":"collab","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"collab-type":{"name":"collab-type"},"symbol":{"name":"symbol"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"collab","content":{"type":"*","block":{"type":"|","blocks":["TEXT","inline-supplementary-material","related-article","related-object","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","hr","break","contrib-group","address","aff","aff-alternatives","author-comment","bio","email","etal","ext-link","fn","on-behalf-of","role","uri","xref","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","x"]}}}},"collab-alternatives":{"name":"collab-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"collab-alternatives","content":{"type":"+","block":"collab"}}},"comment":{"name":"comment","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"comment","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"compound-kwd":{"name":"compound-kwd","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-kwd","content":{"type":"+","block":"compound-kwd-part"}}},"compound-kwd-part":{"name":"compound-kwd-part","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-kwd-part","content":{"type":"*","block":{"type":"|","blocks":["TEXT","break","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"compound-subject":{"name":"compound-subject","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-subject","content":{"type":"+","block":"compound-subject-part"}}},"compound-subject-part":{"name":"compound-subject-part","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-subject-part","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","named-content","styled-content","sub","sup"]}}}},"conf-acronym":{"name":"conf-acronym","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-acronym","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"conf-date":{"name":"conf-date","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-date","content":{"type":"*","block":{"type":"|","blocks":["TEXT","day","era","month","season","year","x"]}}}},"conf-loc":{"name":"conf-loc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-loc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state"]}}}},"conf-name":{"name":"conf-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-name","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"conf-num":{"name":"conf-num","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-num","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"conf-sponsor":{"name":"conf-sponsor","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-sponsor","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","institution","institution-wrap"]}}}},"conf-theme":{"name":"conf-theme","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-theme","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"conference":{"name":"conference","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"conference","content":{"type":"*","block":{"type":"|","blocks":["conf-date","conf-name","conf-num","conf-loc","conf-sponsor","conf-theme","conf-acronym","string-conf","x"]}}}},"contrib":{"name":"contrib","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"contrib-type":{"name":"contrib-type"},"corresp":{"name":"corresp"},"equal-contrib":{"name":"equal-contrib"},"deceased":{"name":"deceased"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"contrib","content":{"type":"*","block":{"type":"|","blocks":["contrib-id","anonymous","collab","collab-alternatives","name","name-alternatives","string-name","degrees","address","aff","aff-alternatives","author-comment","bio","email","etal","ext-link","fn","on-behalf-of","role","uri","xref","x"]}}}},"contrib-group":{"name":"contrib-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"contrib-group","content":{"type":"+","block":{"type":"|","blocks":["contrib","address","aff","aff-alternatives","author-comment","bio","email","etal","ext-link","fn","on-behalf-of","role","uri","xref","x"]}}}},"contrib-id":{"name":"contrib-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"contrib-id-type":{"name":"contrib-id-type"},"authenticated":{"name":"authenticated"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"contrib-id","content":"TEXT"}},"copyright-holder":{"name":"copyright-holder","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"copyright-holder","content":{"type":"*","block":{"type":"|","blocks":["TEXT","institution","institution-wrap","sub","sup","x"]}}}},"copyright-statement":{"name":"copyright-statement","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"copyright-statement","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"copyright-year":{"name":"copyright-year","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"copyright-year","content":"TEXT"}},"corresp":{"name":"corresp","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"corresp","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","label"]}}}},"count":{"name":"count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count-type":{"name":"count-type"},"count":{"name":"count"}},"elements":{"name":"count","content":{"type":",","blocks":[]}}},"country":{"name":"country","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"country":{"name":"country"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"country","content":{"type":"*","block":{"type":"|","blocks":["TEXT","x"]}}}},"counts":{"name":"counts","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"counts","content":{"type":",","blocks":[{"type":"*","block":"count"},{"type":"?","block":"fig-count"},{"type":"?","block":"table-count"},{"type":"?","block":"equation-count"},{"type":"?","block":"ref-count"},{"type":"?","block":"page-count"},{"type":"?","block":"word-count"}]}}},"custom-meta":{"name":"custom-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"custom-meta","content":{"type":",","blocks":["meta-name","meta-value"]}}},"custom-meta-group":{"name":"custom-meta-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"custom-meta-group","content":{"type":"+","block":"custom-meta"}}},"data-title":{"name":"data-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"data-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","named-content","styled-content","sub","sup"]}}}},"date":{"name":"date","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"date-type":{"name":"date-type"},"publication-format":{"name":"publication-format"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"specific-use":{"name":"specific-use"}},"elements":{"name":"date","content":{"type":",","blocks":[{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"day"},{"type":"?","block":"month"}]},"season"]}},{"type":"?","block":"year"},{"type":"?","block":"era"},{"type":"?","block":"string-date"}]}}},"date-in-citation":{"name":"date-in-citation","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"date-in-citation","content":{"type":"*","block":{"type":"|","blocks":["TEXT","day","era","month","season","year","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","x"]}}}},"day":{"name":"day","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"day","content":"TEXT"}},"def":{"name":"def","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"def","content":{"type":"+","block":"p"}}},"def-head":{"name":"def-head","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"def-head","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"def-item":{"name":"def-item","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"def-item","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"*","block":"term"},{"type":"*","block":{"type":"|","blocks":["def","x"]}}]}}},"def-list":{"name":"def-list","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"list-type":{"name":"list-type"},"prefix-word":{"name":"prefix-word"},"list-content":{"name":"list-content"},"continued-from":{"name":"continued-from"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"def-list","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"?","block":"term-head"},{"type":"?","block":"def-head"},{"type":"*","block":{"type":"|","blocks":["def-item","x"]}},{"type":"*","block":"def-list"}]}}},"degrees":{"name":"degrees","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"degrees","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"disp-formula":{"name":"disp-formula","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"disp-formula","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","abstract","alt-text","long-desc","break","attrib","permissions","kwd-group","label","array","code","graphic","media","preformat"]}}}},"disp-formula-group":{"name":"disp-formula-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"disp-formula-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-formula","disp-formula-group"]}}]}}},"disp-quote":{"name":"disp-quote","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"disp-quote","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"edition":{"name":"edition","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"designator":{"name":"designator"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"edition","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"element-citation":{"name":"element-citation","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-type":{"name":"publication-type"},"publisher-type":{"name":"publisher-type"},"publication-format":{"name":"publication-format"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"element-citation","content":{"type":"+","block":{"type":"|","blocks":["inline-supplementary-material","related-article","related-object","hr","string-date","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","label","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","fn","target","xref","sub","sup","x"]}}}},"elocation-id":{"name":"elocation-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"seq":{"name":"seq"},"specific-use":{"name":"specific-use"}},"elements":{"name":"elocation-id","content":"TEXT"}},"email":{"name":"email","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"email","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"equation-count":{"name":"equation-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"equation-count","content":{"type":",","blocks":[]}}},"era":{"name":"era","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"era","content":"TEXT"}},"etal":{"name":"etal","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"etal","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"ext-link":{"name":"ext-link","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"ext-link-type":{"name":"ext-link-type"},"assigning-authority":{"name":"assigning-authority"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"ext-link","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"fax":{"name":"fax","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"fax","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"fig":{"name":"fig","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"fig-type":{"name":"fig-type"}},"elements":{"name":"fig","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"*","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-formula","disp-formula-group","chem-struct-wrap","disp-quote","speech","statement","verse-group","table-wrap","p","def-list","list","alternatives","array","code","graphic","media","preformat"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"fig-count":{"name":"fig-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"fig-count","content":{"type":",","blocks":[]}}},"fig-group":{"name":"fig-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"fig-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["fig","alternatives","graphic","media"]}}]}}},"fixed-case":{"name":"fixed-case","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"fixed-case","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"floats-group":{"name":"floats-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"floats-group","content":{"type":"*","block":{"type":"|","blocks":["alternatives","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group"]}}}},"fn":{"name":"fn","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"symbol":{"name":"symbol"},"fn-type":{"name":"fn-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"fn","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"+","block":"p"}]}}},"fn-group":{"name":"fn-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"fn-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["fn","x"]}}]}}},"fpage":{"name":"fpage","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"seq":{"name":"seq"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"fpage","content":"TEXT"}},"front":{"name":"front","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"front","content":{"type":",","blocks":[{"type":"?","block":"journal-meta"},"article-meta",{"type":"*","block":{"type":"|","blocks":["def-list","list","ack","bio","fn-group","glossary","notes"]}}]}}},"front-stub":{"name":"front-stub","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"front-stub","content":{"type":",","blocks":[{"type":"*","block":"article-id"},{"type":"?","block":"article-categories"},{"type":"?","block":"title-group"},{"type":"*","block":{"type":"|","blocks":["contrib-group","aff","aff-alternatives","x"]}},{"type":"?","block":"author-notes"},{"type":"*","block":"pub-date"},{"type":"*","block":"volume"},{"type":"*","block":"volume-id"},{"type":"?","block":"volume-series"},{"type":"*","block":"issue"},{"type":"*","block":"issue-id"},{"type":"*","block":"issue-title"},{"type":"*","block":"issue-sponsor"},{"type":"?","block":"issue-part"},{"type":"*","block":"volume-issue-group"},{"type":"*","block":"isbn"},{"type":"?","block":"supplement"},{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":{"type":",","blocks":["fpage",{"type":"?","block":"lpage"}]}},{"type":"?","block":"page-range"}]},"elocation-id"]}},{"type":"*","block":{"type":"|","blocks":["email","ext-link","uri","product","supplementary-material"]}},{"type":"?","block":"history"},{"type":"?","block":"permissions"},{"type":"*","block":"self-uri"},{"type":"*","block":{"type":"|","blocks":["related-article","related-object"]}},{"type":"*","block":"abstract"},{"type":"*","block":"trans-abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":"funding-group"},{"type":"*","block":"conference"},{"type":"?","block":"counts"},{"type":"?","block":"custom-meta-group"}]}}},"funding-group":{"name":"funding-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"funding-group","content":{"type":",","blocks":[{"type":"*","block":"award-group"},{"type":"*","block":"funding-statement"},{"type":"*","block":"open-access"}]}}},"funding-source":{"name":"funding-source","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"source-type":{"name":"source-type"},"country":{"name":"country"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"funding-source","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","institution","institution-wrap"]}}}},"funding-statement":{"name":"funding-statement","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"funding-statement","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","award-id","funding-source","open-access"]}}}},"given-names":{"name":"given-names","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"initials":{"name":"initials"}},"elements":{"name":"given-names","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"glossary":{"name":"glossary","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"glossary","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"glossary"}]}}},"glyph-data":{"name":"glyph-data","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"fontchar":{"name":"fontchar"},"fontname":{"name":"fontname"},"format":{"name":"format"},"resolution":{"name":"resolution"},"xml:space":{"name":"xml:space"},"x-size":{"name":"x-size"},"y-size":{"name":"y-size"}},"elements":{"name":"glyph-data","content":"TEXT"}},"glyph-ref":{"name":"glyph-ref","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"glyph-data":{"name":"glyph-data"}},"elements":{"name":"glyph-ref","content":{"type":",","blocks":[]}}},"gov":{"name":"gov","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"gov","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"graphic":{"name":"graphic","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"},"mime-subtype":{"name":"mime-subtype"},"mimetype":{"name":"mimetype"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"graphic","content":{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","abstract","email","ext-link","uri","caption","object-id","kwd-group","label","attrib","permissions"]}}}},"history":{"name":"history","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"history","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","date","string-date"]}}}},"hr":{"name":"hr","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"hr","content":{"type":",","blocks":[]}}},"inline-formula":{"name":"inline-formula","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"inline-formula","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"inline-graphic":{"name":"inline-graphic","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"baseline-shift":{"name":"baseline-shift"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"inline-graphic","content":{"type":"?","block":"alt-text"}}},"inline-supplementary-material":{"name":"inline-supplementary-material","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"inline-supplementary-material","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"institution":{"name":"institution","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"institution","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"institution-id":{"name":"institution-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"institution-id-type":{"name":"institution-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"institution-id","content":"TEXT"}},"institution-wrap":{"name":"institution-wrap","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"institution-wrap","content":{"type":"*","block":{"type":"|","blocks":["institution","institution-id"]}}}},"isbn":{"name":"isbn","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-format":{"name":"publication-format"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"isbn","content":{"type":"*","block":{"type":"|","blocks":["TEXT","x"]}}}},"issn":{"name":"issn","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-type":{"name":"pub-type"},"publication-format":{"name":"publication-format"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"issn","content":{"type":"*","block":{"type":"|","blocks":["TEXT","x"]}}}},"issn-l":{"name":"issn-l","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"issn-l","content":{"type":"*","block":{"type":"|","blocks":["TEXT","x"]}}}},"issue":{"name":"issue","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"seq":{"name":"seq"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"issue-id":{"name":"issue-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"issue-id","content":"TEXT"}},"issue-part":{"name":"issue-part","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue-part","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"issue-sponsor":{"name":"issue-sponsor","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue-sponsor","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"issue-title":{"name":"issue-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"italic":{"name":"italic","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"italic","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"journal-id":{"name":"journal-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"journal-id-type":{"name":"journal-id-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"journal-id","content":"TEXT"}},"journal-meta":{"name":"journal-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"journal-meta","content":{"type":",","blocks":[{"type":"*","block":"journal-id"},{"type":"*","block":"journal-title-group"},{"type":"*","block":{"type":"|","blocks":["contrib-group","aff","aff-alternatives"]}},{"type":"*","block":"issn"},{"type":"?","block":"issn-l"},{"type":"*","block":"isbn"},{"type":"?","block":"publisher"},{"type":"*","block":"notes"},{"type":"*","block":"self-uri"},{"type":"?","block":"custom-meta-group"}]}}},"journal-subtitle":{"name":"journal-subtitle","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"journal-subtitle","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"journal-title":{"name":"journal-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"journal-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"journal-title-group":{"name":"journal-title-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"journal-title-group","content":{"type":",","blocks":[{"type":"*","block":"journal-title"},{"type":"*","block":"journal-subtitle"},{"type":"*","block":"trans-title-group"},{"type":"*","block":"abbrev-journal-title"}]}}},"kwd":{"name":"kwd","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"kwd","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"kwd-group":{"name":"kwd-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"kwd-group-type":{"name":"kwd-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"kwd-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"|","blocks":[{"type":"+","block":{"type":"|","blocks":["kwd","compound-kwd","nested-kwd","x"]}},{"type":"*","block":"unstructured-kwd-group"}]}]}}},"label":{"name":"label","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"alt":{"name":"alt"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"label","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"license":{"name":"license","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"license-type":{"name":"license-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"license","content":{"type":"+","block":{"type":"|","blocks":["ali:license_ref","license-p"]}}}},"license-p":{"name":"license-p","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"license-p","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","address","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","citation-alternatives","element-citation","mixed-citation","nlm-citation","award-id","funding-source","open-access","def-list","list","ack","disp-quote","speech","statement","verse-group","price"]}}}},"list":{"name":"list","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"list-type":{"name":"list-type"},"prefix-word":{"name":"prefix-word"},"list-content":{"name":"list-content"},"continued-from":{"name":"continued-from"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"list","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["list-item","x"]}}]}}},"list-item":{"name":"list-item","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"list-item","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["p","def-list","list"]}}]}}},"long-desc":{"name":"long-desc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"long-desc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","x"]}}}},"lpage":{"name":"lpage","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"lpage","content":"TEXT"}},"media":{"name":"media","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"media","content":{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","abstract","email","ext-link","uri","caption","object-id","kwd-group","label","attrib","permissions"]}}}},"meta-name":{"name":"meta-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"meta-name","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"meta-value":{"name":"meta-value","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"meta-value","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"milestone-end":{"name":"milestone-end","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"rationale":{"name":"rationale"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"milestone-end","content":{"type":",","blocks":[]}}},"milestone-start":{"name":"milestone-start","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"rationale":{"name":"rationale"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"milestone-start","content":{"type":",","blocks":[]}}},"mixed-citation":{"name":"mixed-citation","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-type":{"name":"publication-type"},"publisher-type":{"name":"publisher-type"},"publication-format":{"name":"publication-format"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"mixed-citation","content":{"type":"*","block":{"type":"|","blocks":["TEXT","inline-supplementary-material","related-article","related-object","hr","string-date","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","label","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","fn","target","xref","sub","sup","x"]}}}},"mml:abs":{"name":"mml:abs","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:abs","content":{"type":",","blocks":[]}}},"mml:and":{"name":"mml:and","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:and","content":{"type":",","blocks":[]}}},"mml:annotation":{"name":"mml:annotation","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"cd":{"name":"cd"},"name":{"name":"name"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"src":{"name":"src"}},"elements":{"name":"mml:annotation","content":"TEXT"}},"mml:annotation-xml":{"name":"mml:annotation-xml","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"cd":{"name":"cd"},"name":{"name":"name"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"src":{"name":"src"}},"elements":{"name":"mml:annotation-xml","content":{"type":"+","block":"p"}}},"mml:apply":{"name":"mml:apply","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"}},"elements":{"name":"mml:apply","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":[{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},"mml:degree","mml:momentabout","mml:logbase"]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:approx":{"name":"mml:approx","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:approx","content":{"type":",","blocks":[]}}},"mml:arccos":{"name":"mml:arccos","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccos","content":{"type":",","blocks":[]}}},"mml:arccosh":{"name":"mml:arccosh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccosh","content":{"type":",","blocks":[]}}},"mml:arccot":{"name":"mml:arccot","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccot","content":{"type":",","blocks":[]}}},"mml:arccoth":{"name":"mml:arccoth","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccoth","content":{"type":",","blocks":[]}}},"mml:arccsc":{"name":"mml:arccsc","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccsc","content":{"type":",","blocks":[]}}},"mml:arccsch":{"name":"mml:arccsch","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccsch","content":{"type":",","blocks":[]}}},"mml:arcsec":{"name":"mml:arcsec","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsec","content":{"type":",","blocks":[]}}},"mml:arcsech":{"name":"mml:arcsech","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsech","content":{"type":",","blocks":[]}}},"mml:arcsin":{"name":"mml:arcsin","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsin","content":{"type":",","blocks":[]}}},"mml:arcsinh":{"name":"mml:arcsinh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsinh","content":{"type":",","blocks":[]}}},"mml:arctan":{"name":"mml:arctan","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arctan","content":{"type":",","blocks":[]}}},"mml:arctanh":{"name":"mml:arctanh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arctanh","content":{"type":",","blocks":[]}}},"mml:arg":{"name":"mml:arg","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arg","content":{"type":",","blocks":[]}}},"mml:bind":{"name":"mml:bind","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"}},"elements":{"name":"mml:bind","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":[{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},"mml:degree","mml:momentabout","mml:logbase"]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:bvar":{"name":"mml:bvar","type":"element","attributes":{},"elements":{"name":"mml:bvar","content":{"type":"|","blocks":[{"type":",","blocks":["mml:degree",{"type":"|","blocks":["mml:ci","mml:semantics"]}]},{"type":",","blocks":[{"type":"|","blocks":["mml:ci","mml:semantics"]},{"type":"?","block":"mml:degree"}]}]}}},"mml:card":{"name":"mml:card","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:card","content":{"type":",","blocks":[]}}},"mml:cartesianproduct":{"name":"mml:cartesianproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cartesianproduct","content":{"type":",","blocks":[]}}},"mml:cbytes":{"name":"mml:cbytes","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cbytes","content":"TEXT"}},"mml:ceiling":{"name":"mml:ceiling","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:ceiling","content":{"type":",","blocks":[]}}},"mml:cerror":{"name":"mml:cerror","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"}},"elements":{"name":"mml:cerror","content":{"type":",","blocks":["mml:csymbol",{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:ci":{"name":"mml:ci","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"}},"elements":{"name":"mml:ci","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:cn":{"name":"mml:cn","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"},"base":{"name":"base"}},"elements":{"name":"mml:cn","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:sep","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:codomain":{"name":"mml:codomain","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:codomain","content":{"type":",","blocks":[]}}},"mml:complexes":{"name":"mml:complexes","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:complexes","content":{"type":",","blocks":[]}}},"mml:compose":{"name":"mml:compose","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:compose","content":{"type":",","blocks":[]}}},"mml:condition":{"name":"mml:condition","type":"element","attributes":{},"elements":{"name":"mml:condition","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:conjugate":{"name":"mml:conjugate","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:conjugate","content":{"type":",","blocks":[]}}},"mml:cos":{"name":"mml:cos","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cos","content":{"type":",","blocks":[]}}},"mml:cosh":{"name":"mml:cosh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cosh","content":{"type":",","blocks":[]}}},"mml:cot":{"name":"mml:cot","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cot","content":{"type":",","blocks":[]}}},"mml:coth":{"name":"mml:coth","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:coth","content":{"type":",","blocks":[]}}},"mml:cs":{"name":"mml:cs","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cs","content":"TEXT"}},"mml:csc":{"name":"mml:csc","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:csc","content":{"type":",","blocks":[]}}},"mml:csch":{"name":"mml:csch","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:csch","content":{"type":",","blocks":[]}}},"mml:csymbol":{"name":"mml:csymbol","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"},"cd":{"name":"cd"}},"elements":{"name":"mml:csymbol","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:curl":{"name":"mml:curl","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:curl","content":{"type":",","blocks":[]}}},"mml:declare":{"name":"mml:declare","type":"element","attributes":{"type":{"name":"type"},"scope":{"name":"scope"},"nargs":{"name":"nargs"},"occurrence":{"name":"occurrence"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:declare","content":{"type":"+","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}}},"mml:degree":{"name":"mml:degree","type":"element","attributes":{},"elements":{"name":"mml:degree","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:determinant":{"name":"mml:determinant","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:determinant","content":{"type":",","blocks":[]}}},"mml:diff":{"name":"mml:diff","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:diff","content":{"type":",","blocks":[]}}},"mml:divergence":{"name":"mml:divergence","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:divergence","content":{"type":",","blocks":[]}}},"mml:divide":{"name":"mml:divide","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:divide","content":{"type":",","blocks":[]}}},"mml:domain":{"name":"mml:domain","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:domain","content":{"type":",","blocks":[]}}},"mml:domainofapplication":{"name":"mml:domainofapplication","type":"element","attributes":{},"elements":{"name":"mml:domainofapplication","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:emptyset":{"name":"mml:emptyset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:emptyset","content":{"type":",","blocks":[]}}},"mml:eq":{"name":"mml:eq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:eq","content":{"type":",","blocks":[]}}},"mml:equivalent":{"name":"mml:equivalent","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:equivalent","content":{"type":",","blocks":[]}}},"mml:eulergamma":{"name":"mml:eulergamma","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:eulergamma","content":{"type":",","blocks":[]}}},"mml:exists":{"name":"mml:exists","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:exists","content":{"type":",","blocks":[]}}},"mml:exp":{"name":"mml:exp","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:exp","content":{"type":",","blocks":[]}}},"mml:exponentiale":{"name":"mml:exponentiale","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:exponentiale","content":{"type":",","blocks":[]}}},"mml:factorial":{"name":"mml:factorial","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:factorial","content":{"type":",","blocks":[]}}},"mml:factorof":{"name":"mml:factorof","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:factorof","content":{"type":",","blocks":[]}}},"mml:false":{"name":"mml:false","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:false","content":{"type":",","blocks":[]}}},"mml:floor":{"name":"mml:floor","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:floor","content":{"type":",","blocks":[]}}},"mml:fn":{"name":"mml:fn","type":"element","attributes":{},"elements":{"name":"mml:fn","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:forall":{"name":"mml:forall","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:forall","content":{"type":",","blocks":[]}}},"mml:gcd":{"name":"mml:gcd","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:gcd","content":{"type":",","blocks":[]}}},"mml:geq":{"name":"mml:geq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:geq","content":{"type":",","blocks":[]}}},"mml:grad":{"name":"mml:grad","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:grad","content":{"type":",","blocks":[]}}},"mml:gt":{"name":"mml:gt","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:gt","content":{"type":",","blocks":[]}}},"mml:ident":{"name":"mml:ident","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:ident","content":{"type":",","blocks":[]}}},"mml:image":{"name":"mml:image","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:image","content":{"type":",","blocks":[]}}},"mml:imaginary":{"name":"mml:imaginary","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:imaginary","content":{"type":",","blocks":[]}}},"mml:imaginaryi":{"name":"mml:imaginaryi","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:imaginaryi","content":{"type":",","blocks":[]}}},"mml:implies":{"name":"mml:implies","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:implies","content":{"type":",","blocks":[]}}},"mml:in":{"name":"mml:in","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:in","content":{"type":",","blocks":[]}}},"mml:infinity":{"name":"mml:infinity","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:infinity","content":{"type":",","blocks":[]}}},"mml:int":{"name":"mml:int","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:int","content":{"type":",","blocks":[]}}},"mml:integers":{"name":"mml:integers","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:integers","content":{"type":",","blocks":[]}}},"mml:intersect":{"name":"mml:intersect","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:intersect","content":{"type":",","blocks":[]}}},"mml:interval":{"name":"mml:interval","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"closure":{"name":"closure"}},"elements":{"name":"mml:interval","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}]}}},"mml:inverse":{"name":"mml:inverse","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:inverse","content":{"type":",","blocks":[]}}},"mml:lambda":{"name":"mml:lambda","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:lambda","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}]}}},"mml:laplacian":{"name":"mml:laplacian","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:laplacian","content":{"type":",","blocks":[]}}},"mml:lcm":{"name":"mml:lcm","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:lcm","content":{"type":",","blocks":[]}}},"mml:leq":{"name":"mml:leq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:leq","content":{"type":",","blocks":[]}}},"mml:limit":{"name":"mml:limit","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:limit","content":{"type":",","blocks":[]}}},"mml:list":{"name":"mml:list","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"order":{"name":"order"}},"elements":{"name":"mml:list","content":{"type":",","blocks":[{"type":"*","block":{"type":"*","block":"mml:bvar"}},{"type":"*","block":{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:ln":{"name":"mml:ln","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:ln","content":{"type":",","blocks":[]}}},"mml:log":{"name":"mml:log","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:log","content":{"type":",","blocks":[]}}},"mml:logbase":{"name":"mml:logbase","type":"element","attributes":{},"elements":{"name":"mml:logbase","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:lowlimit":{"name":"mml:lowlimit","type":"element","attributes":{},"elements":{"name":"mml:lowlimit","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:lt":{"name":"mml:lt","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:lt","content":{"type":",","blocks":[]}}},"mml:maction":{"name":"mml:maction","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"actiontype":{"name":"actiontype"},"selection":{"name":"selection"}},"elements":{"name":"mml:maction","content":{"type":"+","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:maligngroup":{"name":"mml:maligngroup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:maligngroup","content":{"type":",","blocks":[]}}},"mml:malignmark":{"name":"mml:malignmark","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"edge":{"name":"edge"}},"elements":{"name":"mml:malignmark","content":{"type":",","blocks":[]}}},"mml:math":{"name":"mml:math","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"display":{"name":"display"},"maxwidth":{"name":"maxwidth"},"overflow":{"name":"overflow"},"altimg":{"name":"altimg"},"altimg-width":{"name":"altimg-width"},"altimg-height":{"name":"altimg-height"},"altimg-valign":{"name":"altimg-valign"},"alttext":{"name":"alttext"},"cdgroup":{"name":"cdgroup"},"mode":{"name":"mode"},"macros":{"name":"macros"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"scriptlevel":{"name":"scriptlevel"},"displaystyle":{"name":"displaystyle"},"scriptsizemultiplier":{"name":"scriptsizemultiplier"},"scriptminsize":{"name":"scriptminsize"},"infixlinebreakstyle":{"name":"infixlinebreakstyle"},"decimalpoint":{"name":"decimalpoint"},"accent":{"name":"accent"},"accentunder":{"name":"accentunder"},"align":{"name":"align"},"alignmentscope":{"name":"alignmentscope"},"bevelled":{"name":"bevelled"},"charalign":{"name":"charalign"},"charspacing":{"name":"charspacing"},"close":{"name":"close"},"columnalign":{"name":"columnalign"},"columnlines":{"name":"columnlines"},"columnspacing":{"name":"columnspacing"},"columnspan":{"name":"columnspan"},"columnwidth":{"name":"columnwidth"},"crossout":{"name":"crossout"},"denomalign":{"name":"denomalign"},"depth":{"name":"depth"},"dir":{"name":"dir"},"edge":{"name":"edge"},"equalcolumns":{"name":"equalcolumns"},"equalrows":{"name":"equalrows"},"fence":{"name":"fence"},"form":{"name":"form"},"frame":{"name":"frame"},"framespacing":{"name":"framespacing"},"groupalign":{"name":"groupalign"},"height":{"name":"height"},"indentalign":{"name":"indentalign"},"indentalignfirst":{"name":"indentalignfirst"},"indentalignlast":{"name":"indentalignlast"},"indentshift":{"name":"indentshift"},"indentshiftfirst":{"name":"indentshiftfirst"},"indentshiftlast":{"name":"indentshiftlast"},"indenttarget":{"name":"indenttarget"},"largeop":{"name":"largeop"},"leftoverhang":{"name":"leftoverhang"},"length":{"name":"length"},"linebreak":{"name":"linebreak"},"linebreakmultchar":{"name":"linebreakmultchar"},"linebreakstyle":{"name":"linebreakstyle"},"lineleading":{"name":"lineleading"},"linethickness":{"name":"linethickness"},"location":{"name":"location"},"longdivstyle":{"name":"longdivstyle"},"lquote":{"name":"lquote"},"lspace":{"name":"lspace"},"mathsize":{"name":"mathsize"},"mathvariant":{"name":"mathvariant"},"maxsize":{"name":"maxsize"},"minlabelspacing":{"name":"minlabelspacing"},"minsize":{"name":"minsize"},"movablelimits":{"name":"movablelimits"},"mslinethickness":{"name":"mslinethickness"},"notation":{"name":"notation"},"numalign":{"name":"numalign"},"open":{"name":"open"},"position":{"name":"position"},"rightoverhang":{"name":"rightoverhang"},"rowalign":{"name":"rowalign"},"rowlines":{"name":"rowlines"},"rowspacing":{"name":"rowspacing"},"rowspan":{"name":"rowspan"},"rquote":{"name":"rquote"},"rspace":{"name":"rspace"},"selection":{"name":"selection"},"separator":{"name":"separator"},"separators":{"name":"separators"},"shift":{"name":"shift"},"side":{"name":"side"},"stackalign":{"name":"stackalign"},"stretchy":{"name":"stretchy"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"},"symmetric":{"name":"symmetric"},"valign":{"name":"valign"},"width":{"name":"width"}},"elements":{"name":"mml:math","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:matrix":{"name":"mml:matrix","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:matrix","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:matrixrow":{"name":"mml:matrixrow","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:matrixrow","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:max":{"name":"mml:max","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:max","content":{"type":",","blocks":[]}}},"mml:mean":{"name":"mml:mean","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:mean","content":{"type":",","blocks":[]}}},"mml:median":{"name":"mml:median","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:median","content":{"type":",","blocks":[]}}},"mml:menclose":{"name":"mml:menclose","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"notation":{"name":"notation"}},"elements":{"name":"mml:menclose","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:merror":{"name":"mml:merror","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:merror","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mfenced":{"name":"mml:mfenced","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"open":{"name":"open"},"close":{"name":"close"},"separators":{"name":"separators"}},"elements":{"name":"mml:mfenced","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mfrac":{"name":"mml:mfrac","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"linethickness":{"name":"linethickness"},"numalign":{"name":"numalign"},"denomalign":{"name":"denomalign"},"bevelled":{"name":"bevelled"}},"elements":{"name":"mml:mfrac","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mglyph":{"name":"mml:mglyph","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"src":{"name":"src"},"width":{"name":"width"},"height":{"name":"height"},"valign":{"name":"valign"},"alt":{"name":"alt"},"index":{"name":"index"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mglyph","content":{"type":",","blocks":[]}}},"mml:mi":{"name":"mml:mi","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mi","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:min":{"name":"mml:min","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:min","content":{"type":",","blocks":[]}}},"mml:minus":{"name":"mml:minus","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:minus","content":{"type":",","blocks":[]}}},"mml:mlabeledtr":{"name":"mml:mlabeledtr","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:mlabeledtr","content":{"type":"+","block":"mml:mtd"}}},"mml:mlongdiv":{"name":"mml:mlongdiv","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"shift":{"name":"shift"},"longdivstyle":{"name":"longdivstyle"}},"elements":{"name":"mml:mlongdiv","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]},{"type":"+","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]}}]}}},"mml:mmultiscripts":{"name":"mml:mmultiscripts","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"}},"elements":{"name":"mml:mmultiscripts","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"*","block":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}]}},{"type":"?","block":{"type":",","blocks":["mml:mprescripts",{"type":"*","block":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}]}}]}}]}}},"mml:mn":{"name":"mml:mn","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mn","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mo":{"name":"mml:mo","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"form":{"name":"form"},"fence":{"name":"fence"},"separator":{"name":"separator"},"lspace":{"name":"lspace"},"rspace":{"name":"rspace"},"stretchy":{"name":"stretchy"},"symmetric":{"name":"symmetric"},"maxsize":{"name":"maxsize"},"minsize":{"name":"minsize"},"largeop":{"name":"largeop"},"movablelimits":{"name":"movablelimits"},"accent":{"name":"accent"},"linebreak":{"name":"linebreak"},"lineleading":{"name":"lineleading"},"linebreakstyle":{"name":"linebreakstyle"},"linebreakmultchar":{"name":"linebreakmultchar"},"indentalign":{"name":"indentalign"},"indentshift":{"name":"indentshift"},"indenttarget":{"name":"indenttarget"},"indentalignfirst":{"name":"indentalignfirst"},"indentshiftfirst":{"name":"indentshiftfirst"},"indentalignlast":{"name":"indentalignlast"},"indentshiftlast":{"name":"indentshiftlast"}},"elements":{"name":"mml:mo","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mode":{"name":"mml:mode","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:mode","content":{"type":",","blocks":[]}}},"mml:moment":{"name":"mml:moment","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:moment","content":{"type":",","blocks":[]}}},"mml:momentabout":{"name":"mml:momentabout","type":"element","attributes":{},"elements":{"name":"mml:momentabout","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:mover":{"name":"mml:mover","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"accent":{"name":"accent"},"align":{"name":"align"}},"elements":{"name":"mml:mover","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mpadded":{"name":"mml:mpadded","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"height":{"name":"height"},"depth":{"name":"depth"},"width":{"name":"width"},"lspace":{"name":"lspace"},"voffset":{"name":"voffset"}},"elements":{"name":"mml:mpadded","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mphantom":{"name":"mml:mphantom","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:mphantom","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mprescripts":{"name":"mml:mprescripts","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:mprescripts","content":{"type":",","blocks":[]}}},"mml:mroot":{"name":"mml:mroot","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:mroot","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mrow":{"name":"mml:mrow","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"dir":{"name":"dir"}},"elements":{"name":"mml:mrow","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:ms":{"name":"mml:ms","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"lquote":{"name":"lquote"},"rquote":{"name":"rquote"}},"elements":{"name":"mml:ms","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mscarries":{"name":"mml:mscarries","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"location":{"name":"location"},"crossout":{"name":"crossout"},"scriptsizemultiplier":{"name":"scriptsizemultiplier"}},"elements":{"name":"mml:mscarries","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none","mml:mscarry"]}}}},"mml:mscarry":{"name":"mml:mscarry","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"location":{"name":"location"},"crossout":{"name":"crossout"}},"elements":{"name":"mml:mscarry","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}}}},"mml:msgroup":{"name":"mml:msgroup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"shift":{"name":"shift"}},"elements":{"name":"mml:msgroup","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]}}}},"mml:msline":{"name":"mml:msline","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"length":{"name":"length"},"leftoverhang":{"name":"leftoverhang"},"rightoverhang":{"name":"rightoverhang"},"mslinethickness":{"name":"mslinethickness"}},"elements":{"name":"mml:msline","content":{"type":",","blocks":[]}}},"mml:mspace":{"name":"mml:mspace","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"width":{"name":"width"},"height":{"name":"height"},"depth":{"name":"depth"},"linebreak":{"name":"linebreak"}},"elements":{"name":"mml:mspace","content":{"type":",","blocks":[]}}},"mml:msqrt":{"name":"mml:msqrt","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:msqrt","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:msrow":{"name":"mml:msrow","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"}},"elements":{"name":"mml:msrow","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}}}},"mml:mstack":{"name":"mml:mstack","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"align":{"name":"align"},"stackalign":{"name":"stackalign"},"charalign":{"name":"charalign"},"charspacing":{"name":"charspacing"}},"elements":{"name":"mml:mstack","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]}}}},"mml:mstyle":{"name":"mml:mstyle","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"scriptlevel":{"name":"scriptlevel"},"displaystyle":{"name":"displaystyle"},"scriptsizemultiplier":{"name":"scriptsizemultiplier"},"scriptminsize":{"name":"scriptminsize"},"infixlinebreakstyle":{"name":"infixlinebreakstyle"},"decimalpoint":{"name":"decimalpoint"},"accent":{"name":"accent"},"accentunder":{"name":"accentunder"},"align":{"name":"align"},"alignmentscope":{"name":"alignmentscope"},"bevelled":{"name":"bevelled"},"charalign":{"name":"charalign"},"charspacing":{"name":"charspacing"},"close":{"name":"close"},"columnalign":{"name":"columnalign"},"columnlines":{"name":"columnlines"},"columnspacing":{"name":"columnspacing"},"columnspan":{"name":"columnspan"},"columnwidth":{"name":"columnwidth"},"crossout":{"name":"crossout"},"denomalign":{"name":"denomalign"},"depth":{"name":"depth"},"dir":{"name":"dir"},"edge":{"name":"edge"},"equalcolumns":{"name":"equalcolumns"},"equalrows":{"name":"equalrows"},"fence":{"name":"fence"},"form":{"name":"form"},"frame":{"name":"frame"},"framespacing":{"name":"framespacing"},"groupalign":{"name":"groupalign"},"height":{"name":"height"},"indentalign":{"name":"indentalign"},"indentalignfirst":{"name":"indentalignfirst"},"indentalignlast":{"name":"indentalignlast"},"indentshift":{"name":"indentshift"},"indentshiftfirst":{"name":"indentshiftfirst"},"indentshiftlast":{"name":"indentshiftlast"},"indenttarget":{"name":"indenttarget"},"largeop":{"name":"largeop"},"leftoverhang":{"name":"leftoverhang"},"length":{"name":"length"},"linebreak":{"name":"linebreak"},"linebreakmultchar":{"name":"linebreakmultchar"},"linebreakstyle":{"name":"linebreakstyle"},"lineleading":{"name":"lineleading"},"linethickness":{"name":"linethickness"},"location":{"name":"location"},"longdivstyle":{"name":"longdivstyle"},"lquote":{"name":"lquote"},"lspace":{"name":"lspace"},"mathsize":{"name":"mathsize"},"mathvariant":{"name":"mathvariant"},"maxsize":{"name":"maxsize"},"minlabelspacing":{"name":"minlabelspacing"},"minsize":{"name":"minsize"},"movablelimits":{"name":"movablelimits"},"mslinethickness":{"name":"mslinethickness"},"notation":{"name":"notation"},"numalign":{"name":"numalign"},"open":{"name":"open"},"position":{"name":"position"},"rightoverhang":{"name":"rightoverhang"},"rowalign":{"name":"rowalign"},"rowlines":{"name":"rowlines"},"rowspacing":{"name":"rowspacing"},"rowspan":{"name":"rowspan"},"rquote":{"name":"rquote"},"rspace":{"name":"rspace"},"selection":{"name":"selection"},"separator":{"name":"separator"},"separators":{"name":"separators"},"shift":{"name":"shift"},"side":{"name":"side"},"stackalign":{"name":"stackalign"},"stretchy":{"name":"stretchy"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"},"symmetric":{"name":"symmetric"},"valign":{"name":"valign"},"width":{"name":"width"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"veryverythinmathspace":{"name":"veryverythinmathspace"},"verythinmathspace":{"name":"verythinmathspace"},"thinmathspace":{"name":"thinmathspace"},"mediummathspace":{"name":"mediummathspace"},"thickmathspace":{"name":"thickmathspace"},"verythickmathspace":{"name":"verythickmathspace"},"veryverythickmathspace":{"name":"veryverythickmathspace"}},"elements":{"name":"mml:mstyle","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:msub":{"name":"mml:msub","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"subscriptshift":{"name":"subscriptshift"}},"elements":{"name":"mml:msub","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:msubsup":{"name":"mml:msubsup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"}},"elements":{"name":"mml:msubsup","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:msup":{"name":"mml:msup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"superscriptshift":{"name":"superscriptshift"}},"elements":{"name":"mml:msup","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mtable":{"name":"mml:mtable","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"align":{"name":"align"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"},"alignmentscope":{"name":"alignmentscope"},"columnwidth":{"name":"columnwidth"},"width":{"name":"width"},"rowspacing":{"name":"rowspacing"},"columnspacing":{"name":"columnspacing"},"rowlines":{"name":"rowlines"},"columnlines":{"name":"columnlines"},"frame":{"name":"frame"},"framespacing":{"name":"framespacing"},"equalrows":{"name":"equalrows"},"equalcolumns":{"name":"equalcolumns"},"displaystyle":{"name":"displaystyle"},"side":{"name":"side"},"minlabelspacing":{"name":"minlabelspacing"}},"elements":{"name":"mml:mtable","content":{"type":"*","block":{"type":"|","blocks":["mml:mtr","mml:mlabeledtr"]}}}},"mml:mtd":{"name":"mml:mtd","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"rowspan":{"name":"rowspan"},"columnspan":{"name":"columnspan"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:mtd","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mtext":{"name":"mml:mtext","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mtext","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mtr":{"name":"mml:mtr","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:mtr","content":{"type":"*","block":"mml:mtd"}}},"mml:munder":{"name":"mml:munder","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"accentunder":{"name":"accentunder"},"align":{"name":"align"}},"elements":{"name":"mml:munder","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:munderover":{"name":"mml:munderover","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"accent":{"name":"accent"},"accentunder":{"name":"accentunder"},"align":{"name":"align"}},"elements":{"name":"mml:munderover","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:naturalnumbers":{"name":"mml:naturalnumbers","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:naturalnumbers","content":{"type":",","blocks":[]}}},"mml:neq":{"name":"mml:neq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:neq","content":{"type":",","blocks":[]}}},"mml:none":{"name":"mml:none","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:none","content":{"type":",","blocks":[]}}},"mml:not":{"name":"mml:not","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:not","content":{"type":",","blocks":[]}}},"mml:notanumber":{"name":"mml:notanumber","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notanumber","content":{"type":",","blocks":[]}}},"mml:notin":{"name":"mml:notin","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notin","content":{"type":",","blocks":[]}}},"mml:notprsubset":{"name":"mml:notprsubset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notprsubset","content":{"type":",","blocks":[]}}},"mml:notsubset":{"name":"mml:notsubset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notsubset","content":{"type":",","blocks":[]}}},"mml:or":{"name":"mml:or","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:or","content":{"type":",","blocks":[]}}},"mml:otherwise":{"name":"mml:otherwise","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:otherwise","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:outerproduct":{"name":"mml:outerproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:outerproduct","content":{"type":",","blocks":[]}}},"mml:partialdiff":{"name":"mml:partialdiff","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:partialdiff","content":{"type":",","blocks":[]}}},"mml:pi":{"name":"mml:pi","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:pi","content":{"type":",","blocks":[]}}},"mml:piece":{"name":"mml:piece","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:piece","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}]}}},"mml:piecewise":{"name":"mml:piecewise","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:piecewise","content":{"type":"*","block":{"type":"|","blocks":["mml:piece","mml:otherwise"]}}}},"mml:plus":{"name":"mml:plus","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:plus","content":{"type":",","blocks":[]}}},"mml:power":{"name":"mml:power","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:power","content":{"type":",","blocks":[]}}},"mml:primes":{"name":"mml:primes","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:primes","content":{"type":",","blocks":[]}}},"mml:product":{"name":"mml:product","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:product","content":{"type":",","blocks":[]}}},"mml:prsubset":{"name":"mml:prsubset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:prsubset","content":{"type":",","blocks":[]}}},"mml:quotient":{"name":"mml:quotient","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:quotient","content":{"type":",","blocks":[]}}},"mml:rationals":{"name":"mml:rationals","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:rationals","content":{"type":",","blocks":[]}}},"mml:real":{"name":"mml:real","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:real","content":{"type":",","blocks":[]}}},"mml:reals":{"name":"mml:reals","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:reals","content":{"type":",","blocks":[]}}},"mml:reln":{"name":"mml:reln","type":"element","attributes":{},"elements":{"name":"mml:reln","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}}},"mml:rem":{"name":"mml:rem","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:rem","content":{"type":",","blocks":[]}}},"mml:root":{"name":"mml:root","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:root","content":{"type":",","blocks":[]}}},"mml:scalarproduct":{"name":"mml:scalarproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:scalarproduct","content":{"type":",","blocks":[]}}},"mml:sdev":{"name":"mml:sdev","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sdev","content":{"type":",","blocks":[]}}},"mml:sec":{"name":"mml:sec","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sec","content":{"type":",","blocks":[]}}},"mml:sech":{"name":"mml:sech","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sech","content":{"type":",","blocks":[]}}},"mml:selector":{"name":"mml:selector","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:selector","content":{"type":",","blocks":[]}}},"mml:semantics":{"name":"mml:semantics","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"cd":{"name":"cd"},"name":{"name":"name"}},"elements":{"name":"mml:semantics","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"*","block":{"type":"|","blocks":["mml:annotation","mml:annotation-xml"]}}]}}},"mml:sep":{"name":"mml:sep","type":"element","attributes":{},"elements":{"name":"mml:sep","content":{"type":",","blocks":[]}}},"mml:set":{"name":"mml:set","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"}},"elements":{"name":"mml:set","content":{"type":",","blocks":[{"type":"*","block":{"type":"*","block":"mml:bvar"}},{"type":"*","block":{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:setdiff":{"name":"mml:setdiff","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:setdiff","content":{"type":",","blocks":[]}}},"mml:share":{"name":"mml:share","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"src":{"name":"src"}},"elements":{"name":"mml:share","content":{"type":",","blocks":[]}}},"mml:sin":{"name":"mml:sin","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sin","content":{"type":",","blocks":[]}}},"mml:sinh":{"name":"mml:sinh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sinh","content":{"type":",","blocks":[]}}},"mml:subset":{"name":"mml:subset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:subset","content":{"type":",","blocks":[]}}},"mml:sum":{"name":"mml:sum","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sum","content":{"type":",","blocks":[]}}},"mml:tan":{"name":"mml:tan","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:tan","content":{"type":",","blocks":[]}}},"mml:tanh":{"name":"mml:tanh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:tanh","content":{"type":",","blocks":[]}}},"mml:tendsto":{"name":"mml:tendsto","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"}},"elements":{"name":"mml:tendsto","content":{"type":",","blocks":[]}}},"mml:times":{"name":"mml:times","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:times","content":{"type":",","blocks":[]}}},"mml:transpose":{"name":"mml:transpose","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:transpose","content":{"type":",","blocks":[]}}},"mml:true":{"name":"mml:true","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:true","content":{"type":",","blocks":[]}}},"mml:union":{"name":"mml:union","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:union","content":{"type":",","blocks":[]}}},"mml:uplimit":{"name":"mml:uplimit","type":"element","attributes":{},"elements":{"name":"mml:uplimit","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:variance":{"name":"mml:variance","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:variance","content":{"type":",","blocks":[]}}},"mml:vector":{"name":"mml:vector","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:vector","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:vectorproduct":{"name":"mml:vectorproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:vectorproduct","content":{"type":",","blocks":[]}}},"mml:xor":{"name":"mml:xor","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:xor","content":{"type":",","blocks":[]}}},"monospace":{"name":"monospace","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"monospace","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"month":{"name":"month","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"month","content":"TEXT"}},"name":{"name":"name","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"name-style":{"name":"name-style"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"name","content":{"type":",","blocks":[{"type":"|","blocks":[{"type":",","blocks":["surname",{"type":"?","block":"given-names"}]},"given-names"]},{"type":"?","block":"prefix"},{"type":"?","block":"suffix"}]}}},"name-alternatives":{"name":"name-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"name-alternatives","content":{"type":"+","block":{"type":"|","blocks":["name","string-name"]}}}},"named-content":{"name":"named-content","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"alt":{"name":"alt"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"named-content","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","address","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","ack","disp-quote","speech","statement","verse-group"]}}}},"nested-kwd":{"name":"nested-kwd","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"nested-kwd","content":{"type":",","blocks":[{"type":"+","block":{"type":"|","blocks":["kwd","compound-kwd"]}},{"type":"*","block":"nested-kwd"}]}}},"nlm-citation":{"name":"nlm-citation","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-type":{"name":"publication-type"},"publisher-type":{"name":"publisher-type"},"publication-format":{"name":"publication-format"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"nlm-citation","content":{"type":",","blocks":[{"type":"*","block":{"type":"|","blocks":["person-group","collab"]}},{"type":"*","block":{"type":"|","blocks":["article-title","trans-title"]}},{"type":"?","block":"source"},{"type":"?","block":"patent"},{"type":"?","block":"trans-source"},{"type":"?","block":"year"},{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"month"},{"type":"?","block":"day"},{"type":"?","block":"time-stamp"}]},{"type":"?","block":"season"}]},{"type":"?","block":"access-date"},{"type":"?","block":"volume"},{"type":"?","block":"edition"},{"type":"?","block":"conf-name"},{"type":"?","block":"conf-date"},{"type":"?","block":"conf-loc"},{"type":"*","block":{"type":"|","blocks":["issue","supplement"]}},{"type":"?","block":"publisher-loc"},{"type":"?","block":"publisher-name"},{"type":"*","block":{"type":",","blocks":[{"type":"?","block":"fpage"},{"type":"?","block":"lpage"}]}},{"type":"?","block":"page-count"},{"type":"?","block":"series"},{"type":"*","block":"comment"},{"type":"*","block":"pub-id"},{"type":"?","block":"annotation"}]}}},"note":{"name":"note","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"note","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"+","block":{"type":"|","blocks":["p","product"]}}]}}},"notes":{"name":"notes","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"notes-type":{"name":"notes-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"notes","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}}]}}},"oasis:colspec":{"name":"oasis:colspec","type":"element","attributes":{"colnum":{"name":"colnum"},"colname":{"name":"colname"},"colwidth":{"name":"colwidth"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:colspec","content":{"type":",","blocks":[]}}},"oasis:entry":{"name":"oasis:entry","type":"text","attributes":{"colname":{"name":"colname"},"namest":{"name":"namest"},"nameend":{"name":"nameend"},"morerows":{"name":"morerows"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:entry","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","disp-formula","disp-formula-group","break","chem-struct-wrap","citation-alternatives","element-citation","mixed-citation","nlm-citation","def-list","list","p","array","code","graphic","media","preformat"]}}}},"oasis:row":{"name":"oasis:row","type":"element","attributes":{"rowsep":{"name":"rowsep"},"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:row","content":{"type":"+","block":"oasis:entry"}}},"oasis:table":{"name":"oasis:table","type":"element","attributes":{"frame":{"name":"frame"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"content-type":{"name":"content-type"}},"elements":{"name":"oasis:table","content":{"type":"+","block":"oasis:tgroup"}}},"oasis:tbody":{"name":"oasis:tbody","type":"element","attributes":{"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:tbody","content":{"type":"+","block":"oasis:row"}}},"oasis:tgroup":{"name":"oasis:tgroup","type":"element","attributes":{"cols":{"name":"cols"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"align":{"name":"align"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:tgroup","content":{"type":",","blocks":[{"type":"*","block":"oasis:colspec"},{"type":"?","block":"oasis:thead"},"oasis:tbody"]}}},"oasis:thead":{"name":"oasis:thead","type":"element","attributes":{"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:thead","content":{"type":"+","block":"oasis:row"}}},"object-id":{"name":"object-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"object-id","content":"TEXT"}},"on-behalf-of":{"name":"on-behalf-of","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"on-behalf-of","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","institution","institution-wrap"]}}}},"open-access":{"name":"open-access","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"open-access","content":{"type":"+","block":"p"}}},"overline":{"name":"overline","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"overline","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"overline-end":{"name":"overline-end","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"}},"elements":{"name":"overline-end","content":{"type":",","blocks":[]}}},"overline-start":{"name":"overline-start","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"overline-start","content":{"type":",","blocks":[]}}},"p":{"name":"p","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"p","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","address","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","citation-alternatives","element-citation","mixed-citation","nlm-citation","award-id","funding-source","open-access","def-list","list","ack","disp-quote","speech","statement","verse-group"]}}}},"page-count":{"name":"page-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"page-count","content":{"type":",","blocks":[]}}},"page-range":{"name":"page-range","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"page-range","content":"TEXT"}},"part-title":{"name":"part-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"part-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"patent":{"name":"patent","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"country":{"name":"country"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"patent","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"permissions":{"name":"permissions","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"permissions","content":{"type":",","blocks":[{"type":"*","block":"copyright-statement"},{"type":"*","block":"copyright-year"},{"type":"*","block":"copyright-holder"},{"type":"*","block":{"type":"|","blocks":["ali:free_to_read","license"]}}]}}},"person-group":{"name":"person-group","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"person-group-type":{"name":"person-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"person-group","content":{"type":"*","block":{"type":"|","blocks":["TEXT","anonymous","collab","collab-alternatives","name","name-alternatives","string-name","aff","aff-alternatives","etal","role","x"]}}}},"phone":{"name":"phone","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"phone","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"postal-code":{"name":"postal-code","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"postal-code","content":{"type":"*","block":"TEXT"}}},"prefix":{"name":"prefix","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"prefix","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"preformat":{"name":"preformat","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"preformat-type":{"name":"preformat-type"},"xml:space":{"name":"xml:space"}},"elements":{"name":"preformat","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","attrib","permissions"]}}}},"price":{"name":"price","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"currency":{"name":"currency"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"price","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby"]}}}},"principal-award-recipient":{"name":"principal-award-recipient","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"principal-award-recipient","content":{"type":"*","block":{"type":"|","blocks":["TEXT","contrib-id","name","name-alternatives","institution","institution-wrap","string-name"]}}}},"principal-investigator":{"name":"principal-investigator","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"principal-investigator","content":{"type":"*","block":{"type":"|","blocks":["TEXT","contrib-id","name","name-alternatives","string-name"]}}}},"private-char":{"name":"private-char","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"description":{"name":"description"},"name":{"name":"name"},"specific-use":{"name":"specific-use"}},"elements":{"name":"private-char","content":{"type":"|","blocks":["glyph-data","glyph-ref",{"type":"*","block":"inline-graphic"}]}}},"product":{"name":"product","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"product-type":{"name":"product-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"product","content":{"type":"*","block":{"type":"|","blocks":["TEXT","inline-supplementary-material","related-article","related-object","hr","break","string-date","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","label","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","price","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","fn","target","xref","sub","sup","x"]}}}},"pub-date":{"name":"pub-date","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-type":{"name":"pub-type"},"publication-format":{"name":"publication-format"},"date-type":{"name":"date-type"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"pub-date","content":{"type":"*","block":{"type":"|","blocks":["day","era","month","season","year","string-date","x"]}}}},"pub-id":{"name":"pub-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"assigning-authority":{"name":"assigning-authority"},"specific-use":{"name":"specific-use"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"pub-id","content":"TEXT"}},"publisher":{"name":"publisher","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"publisher","content":{"type":"+","block":{"type":",","blocks":["publisher-name",{"type":"?","block":"publisher-loc"}]}}}},"publisher-loc":{"name":"publisher-loc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"publisher-loc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"publisher-name":{"name":"publisher-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"publisher-name","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","institution","institution-wrap"]}}}},"rb":{"name":"rb","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"rb","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"ref":{"name":"ref","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"ref","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"+","block":{"type":"|","blocks":["citation-alternatives","element-citation","mixed-citation","nlm-citation","note","x"]}}]}}},"ref-count":{"name":"ref-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"ref-count","content":{"type":",","blocks":[]}}},"ref-list":{"name":"ref-list","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"ref-list","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x","ref"]}},{"type":"*","block":"ref-list"}]}}},"related-article":{"name":"related-article","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"related-article-type":{"name":"related-article-type"},"ext-link-type":{"name":"ext-link-type"},"vol":{"name":"vol"},"page":{"name":"page"},"issue":{"name":"issue"},"elocation-id":{"name":"elocation-id"},"journal-id":{"name":"journal-id"},"journal-id-type":{"name":"journal-id-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"related-article","content":{"type":"*","block":{"type":"|","blocks":["TEXT","inline-supplementary-material","related-article","related-object","hr","break","string-date","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","journal-id","label","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","fn","target","xref","sub","sup","x"]}}}},"related-object":{"name":"related-object","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"link-type":{"name":"link-type"},"ext-link-type":{"name":"ext-link-type"},"source-id":{"name":"source-id"},"source-id-type":{"name":"source-id-type"},"source-type":{"name":"source-type"},"document-id":{"name":"document-id"},"document-id-type":{"name":"document-id-type"},"document-type":{"name":"document-type"},"object-id":{"name":"object-id"},"object-id-type":{"name":"object-id-type"},"object-type":{"name":"object-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"related-object","content":{"type":"*","block":{"type":"|","blocks":["TEXT","inline-supplementary-material","related-article","related-object","hr","break","string-date","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","label","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","fn","target","xref","sub","sup","x"]}}}},"response":{"name":"response","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"response-type":{"name":"response-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"response","content":{"type":",","blocks":[{"type":"|","blocks":["front","front-stub"]},{"type":"?","block":"body"},{"type":"?","block":"back"},{"type":"?","block":"floats-group"}]}}},"role":{"name":"role","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"role","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"roman":{"name":"roman","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"roman","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"rp":{"name":"rp","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"rp","content":"TEXT"}},"rt":{"name":"rt","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"rt","content":{"type":"*","block":"TEXT"}}},"ruby":{"name":"ruby","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"ruby","content":{"type":",","blocks":["rb",{"type":"|","blocks":["rt",{"type":",","blocks":["rp","rt","rp"]}]}]}}},"sans-serif":{"name":"sans-serif","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sans-serif","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"sc":{"name":"sc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"season":{"name":"season","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"season","content":"TEXT"}},"sec":{"name":"sec","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"xml:lang":{"name":"xml:lang"},"sec-type":{"name":"sec-type"},"disp-level":{"name":"disp-level"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sec","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}}]}}},"sec-meta":{"name":"sec-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"sec-meta","content":{"type":",","blocks":[{"type":"*","block":"contrib-group"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"?","block":"permissions"}]}}},"self-uri":{"name":"self-uri","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"self-uri","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"series":{"name":"series","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"series","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"series-text":{"name":"series-text","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"series-text","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"series-title":{"name":"series-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"series-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"sig":{"name":"sig","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"sig","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","graphic","media"]}}}},"sig-block":{"name":"sig-block","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sig-block","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","contrib","graphic","media","aff","aff-alternatives","etal","role","sig"]}}}},"size":{"name":"size","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"units":{"name":"units"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"size","content":{"type":"*","block":{"type":"|","blocks":["TEXT","x"]}}}},"source":{"name":"source","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"source","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"speaker":{"name":"speaker","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"speaker","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","degrees","given-names","prefix","surname","suffix"]}}}},"speech":{"name":"speech","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"speech","content":{"type":",","blocks":["speaker",{"type":"+","block":"p"}]}}},"state":{"name":"state","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"state","content":{"type":"*","block":"TEXT"}}},"statement":{"name":"statement","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"statement","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"+","block":{"type":"|","blocks":["p","statement"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"std":{"name":"std","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"std","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","named-content","styled-content","day","month","pub-id","source","std-organization","year","sub","sup"]}}}},"std-organization":{"name":"std-organization","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"std-organization","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","institution","institution-wrap","break"]}}}},"strike":{"name":"strike","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"strike","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"string-conf":{"name":"string-conf","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"string-conf","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","conf-date","conf-name","conf-num","conf-loc","conf-sponsor","conf-theme","conf-acronym","string-conf"]}}}},"string-date":{"name":"string-date","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"string-date","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","day","era","month","season","year"]}}}},"string-name":{"name":"string-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"name-style":{"name":"name-style"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"string-name","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","degrees","given-names","prefix","surname","suffix"]}}}},"styled-content":{"name":"styled-content","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"style":{"name":"style"},"style-type":{"name":"style-type"},"alt":{"name":"alt"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"styled-content","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","address","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","ack","disp-quote","speech","statement","verse-group"]}}}},"sub":{"name":"sub","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"arrange":{"name":"arrange"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sub","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"sub-article":{"name":"sub-article","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"article-type":{"name":"article-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"sub-article","content":{"type":",","blocks":[{"type":"|","blocks":["front","front-stub"]},{"type":"?","block":"body"},{"type":"?","block":"back"},{"type":"?","block":"floats-group"},{"type":"|","blocks":[{"type":"*","block":"sub-article"},{"type":"*","block":"response"}]}]}}},"subj-group":{"name":"subj-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"subj-group-type":{"name":"subj-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"subj-group","content":{"type":",","blocks":[{"type":"+","block":{"type":"|","blocks":["subject","compound-subject"]}},{"type":"*","block":"subj-group"}]}}},"subject":{"name":"subject","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"subject","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"subtitle":{"name":"subtitle","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"subtitle","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"suffix":{"name":"suffix","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"suffix","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"sup":{"name":"sup","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"arrange":{"name":"arrange"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sup","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"supplement":{"name":"supplement","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"supplement-type":{"name":"supplement-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"supplement","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","contrib-group","title"]}}}},"supplementary-material":{"name":"supplementary-material","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"supplementary-material","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"*","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-formula","disp-formula-group","chem-struct-wrap","disp-quote","speech","statement","verse-group","table-wrap","p","def-list","list","alternatives","array","code","graphic","media","preformat"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"surname":{"name":"surname","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"initials":{"name":"initials"}},"elements":{"name":"surname","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"table":{"name":"table","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"summary":{"name":"summary"},"width":{"name":"width"},"border":{"name":"border"},"frame":{"name":"frame"},"rules":{"name":"rules"},"cellspacing":{"name":"cellspacing"},"cellpadding":{"name":"cellpadding"},"specific-use":{"name":"specific-use"}},"elements":{"name":"table","content":{"type":",","blocks":[{"type":"|","blocks":[{"type":"*","block":"col"},{"type":"*","block":"colgroup"}]},{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"thead"},{"type":"?","block":"tfoot"},{"type":"+","block":"tbody"}]},{"type":"+","block":"tr"}]}]}}},"table-count":{"name":"table-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"table-count","content":{"type":",","blocks":[]}}},"table-wrap":{"name":"table-wrap","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"table-wrap","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-quote","speech","statement","verse-group","def-list","list","alternatives","chem-struct-wrap","code","graphic","media","preformat","table","oasis:table"]}},{"type":"*","block":{"type":"|","blocks":["table-wrap-foot","attrib","permissions"]}}]}}},"table-wrap-foot":{"name":"table-wrap-foot","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"table-wrap-foot","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["p","fn-group","fn","attrib","permissions","x"]}}]}}},"table-wrap-group":{"name":"table-wrap-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"table-wrap-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"+","block":"table-wrap"}]}}},"target":{"name":"target","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"target-type":{"name":"target-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"target","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"tbody":{"name":"tbody","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"tbody","content":{"type":"+","block":"tr"}}},"td":{"name":"td","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"abbr":{"name":"abbr"},"axis":{"name":"axis"},"headers":{"name":"headers"},"scope":{"name":"scope"},"rowspan":{"name":"rowspan"},"colspan":{"name":"colspan"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"td","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","disp-formula","disp-formula-group","break","chem-struct-wrap","citation-alternatives","element-citation","mixed-citation","nlm-citation","def-list","list","p","array","code","graphic","media","preformat"]}}}},"term":{"name":"term","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"term","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","disp-formula","disp-formula-group","chem-struct-wrap","array","code","graphic","media","preformat"]}}}},"term-head":{"name":"term-head","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"term-head","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"tex-math":{"name":"tex-math","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"notation":{"name":"notation"},"version":{"name":"version"}},"elements":{"name":"tex-math","content":"TEXT"}},"textual-form":{"name":"textual-form","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"textual-form","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","inline-graphic","private-char","label","tex-math","mml:math","named-content","styled-content","sub","sup"]}}}},"tfoot":{"name":"tfoot","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"tfoot","content":{"type":"+","block":"tr"}}},"th":{"name":"th","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"abbr":{"name":"abbr"},"axis":{"name":"axis"},"headers":{"name":"headers"},"scope":{"name":"scope"},"rowspan":{"name":"rowspan"},"colspan":{"name":"colspan"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"th","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","disp-formula","disp-formula-group","break","chem-struct-wrap","citation-alternatives","element-citation","mixed-citation","nlm-citation","def-list","list","p","array","code","graphic","media","preformat"]}}}},"thead":{"name":"thead","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"thead","content":{"type":"+","block":"tr"}}},"time-stamp":{"name":"time-stamp","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"time-stamp","content":{"type":"*","block":{"type":"|","blocks":["TEXT","day","era","month","season","year","x"]}}}},"title":{"name":"title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break","citation-alternatives","element-citation","mixed-citation","nlm-citation"]}}}},"title-group":{"name":"title-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"title-group","content":{"type":",","blocks":["article-title",{"type":"*","block":"subtitle"},{"type":"*","block":"trans-title-group"},{"type":"*","block":"alt-title"},{"type":"?","block":"fn-group"}]}}},"tr":{"name":"tr","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"tr","content":{"type":"+","block":{"type":"|","blocks":["th","td"]}}}},"trans-abstract":{"name":"trans-abstract","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"abstract-type":{"name":"abstract-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-abstract","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","ack","disp-quote","speech","statement","verse-group","x"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["notes","fn-group","glossary","ref-list"]}}]}}},"trans-source":{"name":"trans-source","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-source","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"trans-subtitle":{"name":"trans-subtitle","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-subtitle","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"trans-title":{"name":"trans-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"trans-title-group":{"name":"trans-title-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-title-group","content":{"type":",","blocks":["trans-title",{"type":"*","block":"trans-subtitle"}]}}},"underline":{"name":"underline","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"underline-style":{"name":"underline-style"},"specific-use":{"name":"specific-use"}},"elements":{"name":"underline","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"underline-end":{"name":"underline-end","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"}},"elements":{"name":"underline-end","content":{"type":",","blocks":[]}}},"underline-start":{"name":"underline-start","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"underline-start","content":{"type":",","blocks":[]}}},"unstructured-kwd-group":{"name":"unstructured-kwd-group","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"kwd-group-type":{"name":"kwd-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"unstructured-kwd-group","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"uri":{"name":"uri","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"uri","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"verse-group":{"name":"verse-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"verse-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"?","block":"subtitle"},{"type":"+","block":{"type":"|","blocks":["verse-line","verse-group"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"verse-line":{"name":"verse-line","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"verse-line","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"version":{"name":"version","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"designator":{"name":"designator"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"version","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"volume":{"name":"volume","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"seq":{"name":"seq"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"volume","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"volume-id":{"name":"volume-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"volume-id","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"volume-issue-group":{"name":"volume-issue-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"volume-issue-group","content":{"type":",","blocks":[{"type":"*","block":"volume"},{"type":"*","block":"volume-id"},{"type":"?","block":"volume-series"},{"type":"*","block":"issue"},{"type":"*","block":"issue-id"},{"type":"*","block":"issue-title"},{"type":"*","block":"issue-sponsor"},{"type":"?","block":"issue-part"}]}}},"volume-series":{"name":"volume-series","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"volume-series","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x"]}}}},"word-count":{"name":"word-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"word-count","content":{"type":",","blocks":[]}}},"x":{"name":"x","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"xml:space":{"name":"xml:space"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"x","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","named-content","styled-content","sub","sup","x"]}}}},"xref":{"name":"xref","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"ref-type":{"name":"ref-type"},"alt":{"name":"alt"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"xref","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","hr","bold","fixed-case","italic","monospace","overline","overline-start","overline-end","roman","sans-serif","sc","strike","underline","underline-start","underline-end","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","x","break"]}}}},"year":{"name":"year","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"year","content":"TEXT"}}}};

const JATSArchiving = substance.XMLSchema.fromJSON(JATSArchivingData);

// TODO: this should come from compilation
JATSArchiving.getName = function() {
  return 'jats'
};

JATSArchiving.getVersion = function() {
  return '1.1'
};

JATSArchiving.getDocTypeParams = function() {
  return [
    'article',
    '-//NLM//DTD JATS (Z39.96) Journal Archiving DTD v1.0 20120330//EN',
    'JATS-journalarchiving.dtd'
  ]
};

var JATSPublishingData = {"start":"article","elements":{"abbrev":{"name":"abbrev","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"alt":{"name":"alt"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"abbrev","content":{"type":"*","block":{"type":"|","blocks":["TEXT","def"]}}}},"abbrev-journal-title":{"name":"abbrev-journal-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"abbrev-type":{"name":"abbrev-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"abbrev-journal-title","content":{"type":"*","block":"TEXT"}}},"abstract":{"name":"abstract","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"abstract-type":{"name":"abstract-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"abstract","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"p"},{"type":"*","block":"sec"}]}}},"access-date":{"name":"access-date","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"access-date","content":{"type":"*","block":"TEXT"}}},"ack":{"name":"ack","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"content-type":{"name":"content-type"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"ack","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":"p"},{"type":"*","block":"sec"},{"type":"*","block":"ref-list"}]}}},"addr-line":{"name":"addr-line","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"addr-line","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","city","country","fax","institution","institution-wrap","phone","postal-code","state"]}}}},"address":{"name":"address","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"address","content":{"type":"*","block":{"type":"|","blocks":["addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri"]}}}},"aff":{"name":"aff","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"aff","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri","inline-supplementary-material","related-article","related-object","break","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","label","fn","target","xref","sub","sup"]}}}},"aff-alternatives":{"name":"aff-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"aff-alternatives","content":{"type":"+","block":"aff"}}},"ali:free_to_read":{"name":"ali:free_to_read","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"end_date":{"name":"end_date"},"start_date":{"name":"start_date"}},"elements":{"name":"ali:free_to_read","content":{"type":",","blocks":[]}}},"ali:license_ref":{"name":"ali:license_ref","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"start_date":{"name":"start_date"}},"elements":{"name":"ali:license_ref","content":"TEXT"}},"alt-text":{"name":"alt-text","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"alt-text","content":"TEXT"}},"alt-title":{"name":"alt-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"alt-title-type":{"name":"alt-title-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"alt-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","break"]}}}},"alternatives":{"name":"alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"alternatives","content":{"type":"+","block":{"type":"|","blocks":["array","chem-struct","code","graphic","inline-graphic","inline-supplementary-material","media","preformat","private-char","supplementary-material","table","oasis:table","textual-form","tex-math","mml:math"]}}}},"annotation":{"name":"annotation","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"annotation","content":{"type":"+","block":"p"}}},"anonymous":{"name":"anonymous","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"anonymous","content":{"type":",","blocks":[]}}},"app":{"name":"app","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"app","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"|","blocks":[{"type":",","blocks":["label",{"type":"?","block":"title"}]},"title"]},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["fn-group","glossary","ref-list"]}},{"type":"?","block":"permissions"}]}}},"app-group":{"name":"app-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"app-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":{"type":"|","blocks":["app","ref-list"]}}]}}},"array":{"name":"array","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"orientation":{"name":"orientation"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"array","content":{"type":",","blocks":[{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"|","blocks":[{"type":"*","block":{"type":"|","blocks":["alternatives","graphic","media"]}},"tbody","oasis:tbody"]},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"article":{"name":"article","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"article-type":{"name":"article-type"},"dtd-version":{"name":"dtd-version"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"article","content":{"type":",","blocks":["front",{"type":"?","block":"body"},{"type":"?","block":"back"},{"type":"?","block":"floats-group"},{"type":"|","blocks":[{"type":"*","block":"sub-article"},{"type":"*","block":"response"}]}]}}},"article-categories":{"name":"article-categories","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"article-categories","content":{"type":",","blocks":[{"type":"*","block":"subj-group"},{"type":"*","block":"series-title"},{"type":"*","block":"series-text"}]}}},"article-id":{"name":"article-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"article-id","content":"TEXT"}},"article-meta":{"name":"article-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"article-meta","content":{"type":",","blocks":[{"type":"*","block":"article-id"},{"type":"?","block":"article-categories"},"title-group",{"type":"*","block":{"type":"|","blocks":["contrib-group","aff","aff-alternatives"]}},{"type":"?","block":"author-notes"},{"type":"+","block":"pub-date"},{"type":"*","block":"volume"},{"type":"*","block":"volume-id"},{"type":"?","block":"volume-series"},{"type":"*","block":"issue"},{"type":"*","block":"issue-id"},{"type":"*","block":"issue-title"},{"type":"*","block":"issue-sponsor"},{"type":"?","block":"issue-part"},{"type":"*","block":"volume-issue-group"},{"type":"*","block":"isbn"},{"type":"?","block":"supplement"},{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":["fpage",{"type":"?","block":"lpage"},{"type":"?","block":"page-range"}]},"elocation-id"]}},{"type":"*","block":{"type":"|","blocks":["email","ext-link","uri","product","supplementary-material"]}},{"type":"?","block":"history"},{"type":"?","block":"permissions"},{"type":"*","block":"self-uri"},{"type":"*","block":{"type":"|","blocks":["related-article","related-object"]}},{"type":"*","block":"abstract"},{"type":"*","block":"trans-abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":"funding-group"},{"type":"*","block":"conference"},{"type":"?","block":"counts"},{"type":"?","block":"custom-meta-group"}]}}},"article-title":{"name":"article-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"article-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","break"]}}}},"attrib":{"name":"attrib","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"attrib","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"author-comment":{"name":"author-comment","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"author-comment","content":{"type":",","blocks":[{"type":"?","block":"title"},{"type":"+","block":"p"}]}}},"author-notes":{"name":"author-notes","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"}},"elements":{"name":"author-notes","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["corresp","fn","p"]}}]}}},"award-group":{"name":"award-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"award-type":{"name":"award-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"award-group","content":{"type":",","blocks":[{"type":"*","block":"funding-source"},{"type":"*","block":"award-id"},{"type":"*","block":"principal-award-recipient"},{"type":"*","block":"principal-investigator"}]}}},"award-id":{"name":"award-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"award-id","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup"]}}}},"back":{"name":"back","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"back","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"*","block":"title"},{"type":"*","block":{"type":"|","blocks":["ack","app-group","bio","fn-group","glossary","ref-list","notes","sec"]}}]}}},"bio":{"name":"bio","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"bio","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["fn-group","glossary","ref-list"]}}]}}},"body":{"name":"body","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"body","content":{"type":",","blocks":[{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"sec"},{"type":"?","block":"sig-block"}]}}},"bold":{"name":"bold","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"bold","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"boxed-text":{"name":"boxed-text","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"boxed-text","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["fn-group","glossary","ref-list"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"break":{"name":"break","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"break","content":{"type":",","blocks":[]}}},"caption":{"name":"caption","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"style":{"name":"style"}},"elements":{"name":"caption","content":{"type":",","blocks":[{"type":"?","block":"title"},{"type":"*","block":"p"}]}}},"chapter-title":{"name":"chapter-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"chapter-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"chem-struct":{"name":"chem-struct","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"chem-struct","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","email","ext-link","uri","break","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","label","def-list","list","tex-math","mml:math","named-content","styled-content","alternatives","array","code","graphic","media","preformat","fn","target","xref","sub","sup"]}}}},"chem-struct-wrap":{"name":"chem-struct-wrap","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"chem-struct-wrap","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"+","block":{"type":"|","blocks":["alternatives","chem-struct","code","graphic","media","preformat","textual-form"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"citation-alternatives":{"name":"citation-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"citation-alternatives","content":{"type":"+","block":{"type":"|","blocks":["element-citation","mixed-citation","nlm-citation"]}}}},"city":{"name":"city","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"city","content":{"type":"*","block":"TEXT"}}},"code":{"name":"code","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"code-type":{"name":"code-type"},"code-version":{"name":"code-version"},"executable":{"name":"executable"},"language":{"name":"language"},"language-version":{"name":"language-version"},"platforms":{"name":"platforms"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"}},"elements":{"name":"code","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"col":{"name":"col","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"span":{"name":"span"},"width":{"name":"width"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"col","content":{"type":",","blocks":[]}}},"colgroup":{"name":"colgroup","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"span":{"name":"span"},"width":{"name":"width"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"colgroup","content":{"type":"*","block":"col"}}},"collab":{"name":"collab","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"collab-type":{"name":"collab-type"},"symbol":{"name":"symbol"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"collab","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","contrib-group","address","aff","aff-alternatives","author-comment","bio","email","ext-link","on-behalf-of","role","uri","xref","fn"]}}}},"collab-alternatives":{"name":"collab-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"collab-alternatives","content":{"type":"+","block":"collab"}}},"comment":{"name":"comment","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"comment","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"compound-kwd":{"name":"compound-kwd","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-kwd","content":{"type":"+","block":"compound-kwd-part"}}},"compound-kwd-part":{"name":"compound-kwd-part","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-kwd-part","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"compound-subject":{"name":"compound-subject","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-subject","content":{"type":"+","block":"compound-subject-part"}}},"compound-subject-part":{"name":"compound-subject-part","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"compound-subject-part","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","named-content","styled-content","sub","sup"]}}}},"conf-acronym":{"name":"conf-acronym","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-acronym","content":{"type":"*","block":"TEXT"}}},"conf-date":{"name":"conf-date","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-date","content":{"type":"*","block":"TEXT"}}},"conf-loc":{"name":"conf-loc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-loc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state"]}}}},"conf-name":{"name":"conf-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-name","content":{"type":"*","block":"TEXT"}}},"conf-num":{"name":"conf-num","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-num","content":{"type":"*","block":"TEXT"}}},"conf-sponsor":{"name":"conf-sponsor","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-sponsor","content":{"type":"*","block":{"type":"|","blocks":["TEXT","institution","institution-wrap"]}}}},"conf-theme":{"name":"conf-theme","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"conf-theme","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup"]}}}},"conference":{"name":"conference","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"conference","content":{"type":",","blocks":["conf-date",{"type":"+","block":{"type":"|","blocks":["conf-name","conf-acronym"]}},{"type":"?","block":"conf-num"},{"type":"?","block":"conf-loc"},{"type":"*","block":"conf-sponsor"},{"type":"?","block":"conf-theme"}]}}},"contrib":{"name":"contrib","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"contrib-type":{"name":"contrib-type"},"corresp":{"name":"corresp"},"equal-contrib":{"name":"equal-contrib"},"deceased":{"name":"deceased"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"contrib","content":{"type":",","blocks":[{"type":"*","block":"contrib-id"},{"type":"*","block":{"type":"|","blocks":["anonymous","collab","collab-alternatives","name","name-alternatives"]}},{"type":"*","block":"degrees"},{"type":"*","block":{"type":"|","blocks":["address","aff","aff-alternatives","author-comment","bio","email","ext-link","on-behalf-of","role","uri","xref"]}}]}}},"contrib-group":{"name":"contrib-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"contrib-group","content":{"type":",","blocks":[{"type":"+","block":"contrib"},{"type":"*","block":{"type":"|","blocks":["address","aff","aff-alternatives","author-comment","bio","email","ext-link","on-behalf-of","role","uri","xref"]}}]}}},"contrib-id":{"name":"contrib-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"contrib-id-type":{"name":"contrib-id-type"},"authenticated":{"name":"authenticated"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"contrib-id","content":"TEXT"}},"copyright-holder":{"name":"copyright-holder","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"copyright-holder","content":{"type":"*","block":{"type":"|","blocks":["TEXT","institution","institution-wrap","sub","sup"]}}}},"copyright-statement":{"name":"copyright-statement","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"copyright-statement","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"copyright-year":{"name":"copyright-year","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"copyright-year","content":"TEXT"}},"corresp":{"name":"corresp","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"corresp","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","label","named-content","styled-content","sub","sup"]}}}},"count":{"name":"count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count-type":{"name":"count-type"},"count":{"name":"count"}},"elements":{"name":"count","content":{"type":",","blocks":[]}}},"country":{"name":"country","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"country":{"name":"country"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"country","content":{"type":"*","block":"TEXT"}}},"counts":{"name":"counts","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"counts","content":{"type":",","blocks":[{"type":"*","block":"count"},{"type":"?","block":"fig-count"},{"type":"?","block":"table-count"},{"type":"?","block":"equation-count"},{"type":"?","block":"ref-count"},{"type":"?","block":"page-count"},{"type":"?","block":"word-count"}]}}},"custom-meta":{"name":"custom-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"custom-meta","content":{"type":",","blocks":["meta-name","meta-value"]}}},"custom-meta-group":{"name":"custom-meta-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"custom-meta-group","content":{"type":"+","block":"custom-meta"}}},"data-title":{"name":"data-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"data-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"date":{"name":"date","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"date-type":{"name":"date-type"},"publication-format":{"name":"publication-format"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"specific-use":{"name":"specific-use"}},"elements":{"name":"date","content":{"type":",","blocks":[{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"day"},{"type":"?","block":"month"}]},"season"]}},"year",{"type":"?","block":"era"}]}}},"date-in-citation":{"name":"date-in-citation","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"date-in-citation","content":{"type":"*","block":{"type":"|","blocks":["TEXT","day","era","month","season","year"]}}}},"day":{"name":"day","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"day","content":"TEXT"}},"def":{"name":"def","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"def","content":{"type":"+","block":"p"}}},"def-head":{"name":"def-head","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"def-head","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"def-item":{"name":"def-item","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"def-item","content":{"type":",","blocks":["term",{"type":"*","block":"def"}]}}},"def-list":{"name":"def-list","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"list-type":{"name":"list-type"},"prefix-word":{"name":"prefix-word"},"list-content":{"name":"list-content"},"continued-from":{"name":"continued-from"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"def-list","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"?","block":"term-head"},{"type":"?","block":"def-head"},{"type":"*","block":"def-item"},{"type":"*","block":"def-list"}]}}},"degrees":{"name":"degrees","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"degrees","content":{"type":"*","block":"TEXT"}}},"disp-formula":{"name":"disp-formula","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"disp-formula","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","abstract","email","ext-link","uri","break","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","inline-graphic","private-char","chem-struct","inline-formula","kwd-group","label","named-content","styled-content","tex-math","mml:math","alternatives","array","code","graphic","media","preformat","sub","sup"]}}}},"disp-formula-group":{"name":"disp-formula-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"disp-formula-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-formula","disp-formula-group"]}}]}}},"disp-quote":{"name":"disp-quote","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"disp-quote","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"edition":{"name":"edition","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"designator":{"name":"designator"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"edition","content":{"type":"*","block":{"type":"|","blocks":["TEXT","sub","sup"]}}}},"element-citation":{"name":"element-citation","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-type":{"name":"publication-type"},"publisher-type":{"name":"publisher-type"},"publication-format":{"name":"publication-format"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"element-citation","content":{"type":"+","block":{"type":"|","blocks":["string-date","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","label","abbrev","milestone-end","milestone-start","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","sub","sup"]}}}},"elocation-id":{"name":"elocation-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"seq":{"name":"seq"},"specific-use":{"name":"specific-use"}},"elements":{"name":"elocation-id","content":"TEXT"}},"email":{"name":"email","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"email","content":{"type":"*","block":"TEXT"}}},"equation-count":{"name":"equation-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"equation-count","content":{"type":",","blocks":[]}}},"era":{"name":"era","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"era","content":"TEXT"}},"etal":{"name":"etal","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"etal","content":{"type":"*","block":"TEXT"}}},"ext-link":{"name":"ext-link","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"ext-link-type":{"name":"ext-link-type"},"assigning-authority":{"name":"assigning-authority"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"ext-link","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"fax":{"name":"fax","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"fax","content":{"type":"*","block":"TEXT"}}},"fig":{"name":"fig","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"fig-type":{"name":"fig-type"}},"elements":{"name":"fig","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-formula","disp-formula-group","chem-struct-wrap","disp-quote","speech","statement","verse-group","table-wrap","p","def-list","list","alternatives","array","code","graphic","media","preformat"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"fig-count":{"name":"fig-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"fig-count","content":{"type":",","blocks":[]}}},"fig-group":{"name":"fig-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"fig-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["fig","alternatives","graphic","media"]}}]}}},"fixed-case":{"name":"fixed-case","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"fixed-case","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"floats-group":{"name":"floats-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"floats-group","content":{"type":"*","block":{"type":"|","blocks":["alternatives","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group"]}}}},"fn":{"name":"fn","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"fn-type":{"name":"fn-type"},"specific-use":{"name":"specific-use"},"symbol":{"name":"symbol"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"fn","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"+","block":"p"}]}}},"fn-group":{"name":"fn-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"fn-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":"fn"}]}}},"fpage":{"name":"fpage","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"seq":{"name":"seq"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"fpage","content":"TEXT"}},"front":{"name":"front","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"front","content":{"type":",","blocks":["journal-meta","article-meta",{"type":"?","block":"notes"}]}}},"front-stub":{"name":"front-stub","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"front-stub","content":{"type":",","blocks":[{"type":"*","block":"article-id"},{"type":"?","block":"article-categories"},{"type":"?","block":"title-group"},{"type":"*","block":{"type":"|","blocks":["contrib-group","aff","aff-alternatives"]}},{"type":"?","block":"author-notes"},{"type":"*","block":"pub-date"},{"type":"*","block":"volume"},{"type":"*","block":"volume-id"},{"type":"?","block":"volume-series"},{"type":"*","block":"issue"},{"type":"*","block":"issue-id"},{"type":"*","block":"issue-title"},{"type":"*","block":"issue-sponsor"},{"type":"?","block":"issue-part"},{"type":"*","block":"volume-issue-group"},{"type":"*","block":"isbn"},{"type":"?","block":"supplement"},{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":["fpage",{"type":"?","block":"lpage"},{"type":"?","block":"page-range"}]},"elocation-id"]}},{"type":"*","block":{"type":"|","blocks":["email","ext-link","uri","product","supplementary-material"]}},{"type":"?","block":"history"},{"type":"?","block":"permissions"},{"type":"*","block":"self-uri"},{"type":"*","block":{"type":"|","blocks":["related-article","related-object"]}},{"type":"*","block":"abstract"},{"type":"*","block":"trans-abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":"funding-group"},{"type":"*","block":"conference"},{"type":"?","block":"counts"},{"type":"?","block":"custom-meta-group"}]}}},"funding-group":{"name":"funding-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"funding-group","content":{"type":",","blocks":[{"type":"*","block":"award-group"},{"type":"*","block":"funding-statement"},{"type":"*","block":"open-access"}]}}},"funding-source":{"name":"funding-source","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"source-type":{"name":"source-type"},"country":{"name":"country"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"funding-source","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","institution","institution-wrap"]}}}},"funding-statement":{"name":"funding-statement","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"funding-statement","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"given-names":{"name":"given-names","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"initials":{"name":"initials"}},"elements":{"name":"given-names","content":{"type":"*","block":"TEXT"}}},"glossary":{"name":"glossary","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"glossary","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"glossary"}]}}},"glyph-data":{"name":"glyph-data","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"fontchar":{"name":"fontchar"},"fontname":{"name":"fontname"},"format":{"name":"format"},"resolution":{"name":"resolution"},"xml:space":{"name":"xml:space"},"x-size":{"name":"x-size"},"y-size":{"name":"y-size"}},"elements":{"name":"glyph-data","content":"TEXT"}},"glyph-ref":{"name":"glyph-ref","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"glyph-data":{"name":"glyph-data"}},"elements":{"name":"glyph-ref","content":{"type":",","blocks":[]}}},"gov":{"name":"gov","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"gov","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content"]}}}},"graphic":{"name":"graphic","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"},"mime-subtype":{"name":"mime-subtype"},"mimetype":{"name":"mimetype"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"graphic","content":{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","abstract","email","ext-link","uri","caption","object-id","kwd-group","label","attrib","permissions"]}}}},"history":{"name":"history","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"history","content":{"type":"+","block":"date"}}},"hr":{"name":"hr","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"hr","content":{"type":",","blocks":[]}}},"inline-formula":{"name":"inline-formula","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"inline-formula","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","named-content","styled-content","sub","sup"]}}}},"inline-graphic":{"name":"inline-graphic","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"baseline-shift":{"name":"baseline-shift"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"inline-graphic","content":{"type":"?","block":"alt-text"}}},"inline-supplementary-material":{"name":"inline-supplementary-material","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"inline-supplementary-material","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"institution":{"name":"institution","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"institution","content":{"type":"*","block":{"type":"|","blocks":["TEXT","sub","sup"]}}}},"institution-id":{"name":"institution-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"institution-id-type":{"name":"institution-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"institution-id","content":"TEXT"}},"institution-wrap":{"name":"institution-wrap","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"institution-wrap","content":{"type":"*","block":{"type":"|","blocks":["institution","institution-id"]}}}},"isbn":{"name":"isbn","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-format":{"name":"publication-format"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"isbn","content":{"type":"*","block":"TEXT"}}},"issn":{"name":"issn","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-type":{"name":"pub-type"},"publication-format":{"name":"publication-format"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"issn","content":{"type":"*","block":"TEXT"}}},"issn-l":{"name":"issn-l","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"issn-l","content":{"type":"*","block":"TEXT"}}},"issue":{"name":"issue","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"seq":{"name":"seq"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue","content":{"type":"*","block":"TEXT"}}},"issue-id":{"name":"issue-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"issue-id","content":"TEXT"}},"issue-part":{"name":"issue-part","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue-part","content":{"type":"*","block":"TEXT"}}},"issue-sponsor":{"name":"issue-sponsor","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue-sponsor","content":{"type":"*","block":"TEXT"}}},"issue-title":{"name":"issue-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"issue-title","content":{"type":"*","block":"TEXT"}}},"italic":{"name":"italic","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"italic","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"journal-id":{"name":"journal-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"journal-id-type":{"name":"journal-id-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"journal-id","content":"TEXT"}},"journal-meta":{"name":"journal-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"journal-meta","content":{"type":",","blocks":[{"type":"+","block":"journal-id"},{"type":"*","block":"journal-title-group"},{"type":"*","block":{"type":"|","blocks":["contrib-group","aff","aff-alternatives"]}},{"type":"+","block":"issn"},{"type":"?","block":"issn-l"},{"type":"*","block":"isbn"},{"type":"?","block":"publisher"},{"type":"*","block":"notes"},{"type":"*","block":"self-uri"}]}}},"journal-subtitle":{"name":"journal-subtitle","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"journal-subtitle","content":{"type":"*","block":"TEXT"}}},"journal-title":{"name":"journal-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"journal-title","content":{"type":"*","block":"TEXT"}}},"journal-title-group":{"name":"journal-title-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"journal-title-group","content":{"type":",","blocks":[{"type":"*","block":"journal-title"},{"type":"*","block":"journal-subtitle"},{"type":"*","block":"trans-title-group"},{"type":"*","block":"abbrev-journal-title"}]}}},"kwd":{"name":"kwd","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"kwd","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"kwd-group":{"name":"kwd-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"kwd-group-type":{"name":"kwd-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"kwd-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["kwd","compound-kwd","nested-kwd"]}}]}}},"label":{"name":"label","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"alt":{"name":"alt"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"label","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","sub","sup"]}}}},"license":{"name":"license","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"license-type":{"name":"license-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"license","content":{"type":"+","block":{"type":"|","blocks":["ali:license_ref","license-p"]}}}},"license-p":{"name":"license-p","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"license-p","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","citation-alternatives","element-citation","mixed-citation","nlm-citation","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","award-id","funding-source","open-access","chem-struct","inline-formula","inline-graphic","private-char","def-list","list","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","disp-quote","speech","statement","verse-group","fn","target","xref","sub","sup","price"]}}}},"list":{"name":"list","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"list-type":{"name":"list-type"},"prefix-word":{"name":"prefix-word"},"list-content":{"name":"list-content"},"continued-from":{"name":"continued-from"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"list","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":"list-item"}]}}},"list-item":{"name":"list-item","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"list-item","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["p","def-list","list"]}}]}}},"long-desc":{"name":"long-desc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"long-desc","content":{"type":"*","block":"TEXT"}}},"lpage":{"name":"lpage","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"lpage","content":"TEXT"}},"media":{"name":"media","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"media","content":{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","abstract","email","ext-link","uri","caption","object-id","kwd-group","label","attrib","permissions"]}}}},"meta-name":{"name":"meta-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"meta-name","content":{"type":"*","block":"TEXT"}}},"meta-value":{"name":"meta-value","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"meta-value","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"milestone-end":{"name":"milestone-end","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"rationale":{"name":"rationale"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"milestone-end","content":{"type":",","blocks":[]}}},"milestone-start":{"name":"milestone-start","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"rationale":{"name":"rationale"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"milestone-start","content":{"type":",","blocks":[]}}},"mixed-citation":{"name":"mixed-citation","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-type":{"name":"publication-type"},"publisher-type":{"name":"publisher-type"},"publication-format":{"name":"publication-format"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"mixed-citation","content":{"type":"*","block":{"type":"|","blocks":["TEXT","string-date","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","label","abbrev","milestone-end","milestone-start","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","sub","sup"]}}}},"mml:abs":{"name":"mml:abs","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:abs","content":{"type":",","blocks":[]}}},"mml:and":{"name":"mml:and","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:and","content":{"type":",","blocks":[]}}},"mml:annotation":{"name":"mml:annotation","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"cd":{"name":"cd"},"name":{"name":"name"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"src":{"name":"src"}},"elements":{"name":"mml:annotation","content":"TEXT"}},"mml:annotation-xml":{"name":"mml:annotation-xml","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"cd":{"name":"cd"},"name":{"name":"name"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"src":{"name":"src"}},"elements":{"name":"mml:annotation-xml","content":{"type":"+","block":"p"}}},"mml:apply":{"name":"mml:apply","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"}},"elements":{"name":"mml:apply","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":[{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},"mml:degree","mml:momentabout","mml:logbase"]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:approx":{"name":"mml:approx","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:approx","content":{"type":",","blocks":[]}}},"mml:arccos":{"name":"mml:arccos","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccos","content":{"type":",","blocks":[]}}},"mml:arccosh":{"name":"mml:arccosh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccosh","content":{"type":",","blocks":[]}}},"mml:arccot":{"name":"mml:arccot","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccot","content":{"type":",","blocks":[]}}},"mml:arccoth":{"name":"mml:arccoth","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccoth","content":{"type":",","blocks":[]}}},"mml:arccsc":{"name":"mml:arccsc","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccsc","content":{"type":",","blocks":[]}}},"mml:arccsch":{"name":"mml:arccsch","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arccsch","content":{"type":",","blocks":[]}}},"mml:arcsec":{"name":"mml:arcsec","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsec","content":{"type":",","blocks":[]}}},"mml:arcsech":{"name":"mml:arcsech","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsech","content":{"type":",","blocks":[]}}},"mml:arcsin":{"name":"mml:arcsin","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsin","content":{"type":",","blocks":[]}}},"mml:arcsinh":{"name":"mml:arcsinh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arcsinh","content":{"type":",","blocks":[]}}},"mml:arctan":{"name":"mml:arctan","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arctan","content":{"type":",","blocks":[]}}},"mml:arctanh":{"name":"mml:arctanh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arctanh","content":{"type":",","blocks":[]}}},"mml:arg":{"name":"mml:arg","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:arg","content":{"type":",","blocks":[]}}},"mml:bind":{"name":"mml:bind","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"}},"elements":{"name":"mml:bind","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":[{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},"mml:degree","mml:momentabout","mml:logbase"]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:bvar":{"name":"mml:bvar","type":"element","attributes":{},"elements":{"name":"mml:bvar","content":{"type":"|","blocks":[{"type":",","blocks":["mml:degree",{"type":"|","blocks":["mml:ci","mml:semantics"]}]},{"type":",","blocks":[{"type":"|","blocks":["mml:ci","mml:semantics"]},{"type":"?","block":"mml:degree"}]}]}}},"mml:card":{"name":"mml:card","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:card","content":{"type":",","blocks":[]}}},"mml:cartesianproduct":{"name":"mml:cartesianproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cartesianproduct","content":{"type":",","blocks":[]}}},"mml:cbytes":{"name":"mml:cbytes","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cbytes","content":"TEXT"}},"mml:ceiling":{"name":"mml:ceiling","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:ceiling","content":{"type":",","blocks":[]}}},"mml:cerror":{"name":"mml:cerror","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"}},"elements":{"name":"mml:cerror","content":{"type":",","blocks":["mml:csymbol",{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:ci":{"name":"mml:ci","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"}},"elements":{"name":"mml:ci","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:cn":{"name":"mml:cn","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"},"base":{"name":"base"}},"elements":{"name":"mml:cn","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:sep","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:codomain":{"name":"mml:codomain","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:codomain","content":{"type":",","blocks":[]}}},"mml:complexes":{"name":"mml:complexes","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:complexes","content":{"type":",","blocks":[]}}},"mml:compose":{"name":"mml:compose","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:compose","content":{"type":",","blocks":[]}}},"mml:condition":{"name":"mml:condition","type":"element","attributes":{},"elements":{"name":"mml:condition","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:conjugate":{"name":"mml:conjugate","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:conjugate","content":{"type":",","blocks":[]}}},"mml:cos":{"name":"mml:cos","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cos","content":{"type":",","blocks":[]}}},"mml:cosh":{"name":"mml:cosh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cosh","content":{"type":",","blocks":[]}}},"mml:cot":{"name":"mml:cot","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cot","content":{"type":",","blocks":[]}}},"mml:coth":{"name":"mml:coth","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:coth","content":{"type":",","blocks":[]}}},"mml:cs":{"name":"mml:cs","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:cs","content":"TEXT"}},"mml:csc":{"name":"mml:csc","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:csc","content":{"type":",","blocks":[]}}},"mml:csch":{"name":"mml:csch","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:csch","content":{"type":",","blocks":[]}}},"mml:csymbol":{"name":"mml:csymbol","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"},"cd":{"name":"cd"}},"elements":{"name":"mml:csymbol","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:curl":{"name":"mml:curl","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:curl","content":{"type":",","blocks":[]}}},"mml:declare":{"name":"mml:declare","type":"element","attributes":{"type":{"name":"type"},"scope":{"name":"scope"},"nargs":{"name":"nargs"},"occurrence":{"name":"occurrence"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:declare","content":{"type":"+","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}}},"mml:degree":{"name":"mml:degree","type":"element","attributes":{},"elements":{"name":"mml:degree","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:determinant":{"name":"mml:determinant","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:determinant","content":{"type":",","blocks":[]}}},"mml:diff":{"name":"mml:diff","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:diff","content":{"type":",","blocks":[]}}},"mml:divergence":{"name":"mml:divergence","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:divergence","content":{"type":",","blocks":[]}}},"mml:divide":{"name":"mml:divide","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:divide","content":{"type":",","blocks":[]}}},"mml:domain":{"name":"mml:domain","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:domain","content":{"type":",","blocks":[]}}},"mml:domainofapplication":{"name":"mml:domainofapplication","type":"element","attributes":{},"elements":{"name":"mml:domainofapplication","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:emptyset":{"name":"mml:emptyset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:emptyset","content":{"type":",","blocks":[]}}},"mml:eq":{"name":"mml:eq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:eq","content":{"type":",","blocks":[]}}},"mml:equivalent":{"name":"mml:equivalent","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:equivalent","content":{"type":",","blocks":[]}}},"mml:eulergamma":{"name":"mml:eulergamma","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:eulergamma","content":{"type":",","blocks":[]}}},"mml:exists":{"name":"mml:exists","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:exists","content":{"type":",","blocks":[]}}},"mml:exp":{"name":"mml:exp","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:exp","content":{"type":",","blocks":[]}}},"mml:exponentiale":{"name":"mml:exponentiale","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:exponentiale","content":{"type":",","blocks":[]}}},"mml:factorial":{"name":"mml:factorial","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:factorial","content":{"type":",","blocks":[]}}},"mml:factorof":{"name":"mml:factorof","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:factorof","content":{"type":",","blocks":[]}}},"mml:false":{"name":"mml:false","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:false","content":{"type":",","blocks":[]}}},"mml:floor":{"name":"mml:floor","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:floor","content":{"type":",","blocks":[]}}},"mml:fn":{"name":"mml:fn","type":"element","attributes":{},"elements":{"name":"mml:fn","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:forall":{"name":"mml:forall","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:forall","content":{"type":",","blocks":[]}}},"mml:gcd":{"name":"mml:gcd","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:gcd","content":{"type":",","blocks":[]}}},"mml:geq":{"name":"mml:geq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:geq","content":{"type":",","blocks":[]}}},"mml:grad":{"name":"mml:grad","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:grad","content":{"type":",","blocks":[]}}},"mml:gt":{"name":"mml:gt","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:gt","content":{"type":",","blocks":[]}}},"mml:ident":{"name":"mml:ident","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:ident","content":{"type":",","blocks":[]}}},"mml:image":{"name":"mml:image","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:image","content":{"type":",","blocks":[]}}},"mml:imaginary":{"name":"mml:imaginary","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:imaginary","content":{"type":",","blocks":[]}}},"mml:imaginaryi":{"name":"mml:imaginaryi","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:imaginaryi","content":{"type":",","blocks":[]}}},"mml:implies":{"name":"mml:implies","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:implies","content":{"type":",","blocks":[]}}},"mml:in":{"name":"mml:in","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:in","content":{"type":",","blocks":[]}}},"mml:infinity":{"name":"mml:infinity","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:infinity","content":{"type":",","blocks":[]}}},"mml:int":{"name":"mml:int","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:int","content":{"type":",","blocks":[]}}},"mml:integers":{"name":"mml:integers","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:integers","content":{"type":",","blocks":[]}}},"mml:intersect":{"name":"mml:intersect","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:intersect","content":{"type":",","blocks":[]}}},"mml:interval":{"name":"mml:interval","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"closure":{"name":"closure"}},"elements":{"name":"mml:interval","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}]}}},"mml:inverse":{"name":"mml:inverse","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:inverse","content":{"type":",","blocks":[]}}},"mml:lambda":{"name":"mml:lambda","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:lambda","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}]}}},"mml:laplacian":{"name":"mml:laplacian","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:laplacian","content":{"type":",","blocks":[]}}},"mml:lcm":{"name":"mml:lcm","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:lcm","content":{"type":",","blocks":[]}}},"mml:leq":{"name":"mml:leq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:leq","content":{"type":",","blocks":[]}}},"mml:limit":{"name":"mml:limit","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:limit","content":{"type":",","blocks":[]}}},"mml:list":{"name":"mml:list","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"order":{"name":"order"}},"elements":{"name":"mml:list","content":{"type":",","blocks":[{"type":"*","block":{"type":"*","block":"mml:bvar"}},{"type":"*","block":{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:ln":{"name":"mml:ln","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:ln","content":{"type":",","blocks":[]}}},"mml:log":{"name":"mml:log","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:log","content":{"type":",","blocks":[]}}},"mml:logbase":{"name":"mml:logbase","type":"element","attributes":{},"elements":{"name":"mml:logbase","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:lowlimit":{"name":"mml:lowlimit","type":"element","attributes":{},"elements":{"name":"mml:lowlimit","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:lt":{"name":"mml:lt","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:lt","content":{"type":",","blocks":[]}}},"mml:maction":{"name":"mml:maction","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"actiontype":{"name":"actiontype"},"selection":{"name":"selection"}},"elements":{"name":"mml:maction","content":{"type":"+","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:maligngroup":{"name":"mml:maligngroup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:maligngroup","content":{"type":",","blocks":[]}}},"mml:malignmark":{"name":"mml:malignmark","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"edge":{"name":"edge"}},"elements":{"name":"mml:malignmark","content":{"type":",","blocks":[]}}},"mml:math":{"name":"mml:math","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"display":{"name":"display"},"maxwidth":{"name":"maxwidth"},"overflow":{"name":"overflow"},"altimg":{"name":"altimg"},"altimg-width":{"name":"altimg-width"},"altimg-height":{"name":"altimg-height"},"altimg-valign":{"name":"altimg-valign"},"alttext":{"name":"alttext"},"cdgroup":{"name":"cdgroup"},"mode":{"name":"mode"},"macros":{"name":"macros"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"scriptlevel":{"name":"scriptlevel"},"displaystyle":{"name":"displaystyle"},"scriptsizemultiplier":{"name":"scriptsizemultiplier"},"scriptminsize":{"name":"scriptminsize"},"infixlinebreakstyle":{"name":"infixlinebreakstyle"},"decimalpoint":{"name":"decimalpoint"},"accent":{"name":"accent"},"accentunder":{"name":"accentunder"},"align":{"name":"align"},"alignmentscope":{"name":"alignmentscope"},"bevelled":{"name":"bevelled"},"charalign":{"name":"charalign"},"charspacing":{"name":"charspacing"},"close":{"name":"close"},"columnalign":{"name":"columnalign"},"columnlines":{"name":"columnlines"},"columnspacing":{"name":"columnspacing"},"columnspan":{"name":"columnspan"},"columnwidth":{"name":"columnwidth"},"crossout":{"name":"crossout"},"denomalign":{"name":"denomalign"},"depth":{"name":"depth"},"dir":{"name":"dir"},"edge":{"name":"edge"},"equalcolumns":{"name":"equalcolumns"},"equalrows":{"name":"equalrows"},"fence":{"name":"fence"},"form":{"name":"form"},"frame":{"name":"frame"},"framespacing":{"name":"framespacing"},"groupalign":{"name":"groupalign"},"height":{"name":"height"},"indentalign":{"name":"indentalign"},"indentalignfirst":{"name":"indentalignfirst"},"indentalignlast":{"name":"indentalignlast"},"indentshift":{"name":"indentshift"},"indentshiftfirst":{"name":"indentshiftfirst"},"indentshiftlast":{"name":"indentshiftlast"},"indenttarget":{"name":"indenttarget"},"largeop":{"name":"largeop"},"leftoverhang":{"name":"leftoverhang"},"length":{"name":"length"},"linebreak":{"name":"linebreak"},"linebreakmultchar":{"name":"linebreakmultchar"},"linebreakstyle":{"name":"linebreakstyle"},"lineleading":{"name":"lineleading"},"linethickness":{"name":"linethickness"},"location":{"name":"location"},"longdivstyle":{"name":"longdivstyle"},"lquote":{"name":"lquote"},"lspace":{"name":"lspace"},"mathsize":{"name":"mathsize"},"mathvariant":{"name":"mathvariant"},"maxsize":{"name":"maxsize"},"minlabelspacing":{"name":"minlabelspacing"},"minsize":{"name":"minsize"},"movablelimits":{"name":"movablelimits"},"mslinethickness":{"name":"mslinethickness"},"notation":{"name":"notation"},"numalign":{"name":"numalign"},"open":{"name":"open"},"position":{"name":"position"},"rightoverhang":{"name":"rightoverhang"},"rowalign":{"name":"rowalign"},"rowlines":{"name":"rowlines"},"rowspacing":{"name":"rowspacing"},"rowspan":{"name":"rowspan"},"rquote":{"name":"rquote"},"rspace":{"name":"rspace"},"selection":{"name":"selection"},"separator":{"name":"separator"},"separators":{"name":"separators"},"shift":{"name":"shift"},"side":{"name":"side"},"stackalign":{"name":"stackalign"},"stretchy":{"name":"stretchy"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"},"symmetric":{"name":"symmetric"},"valign":{"name":"valign"},"width":{"name":"width"}},"elements":{"name":"mml:math","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:matrix":{"name":"mml:matrix","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:matrix","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:matrixrow":{"name":"mml:matrixrow","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:matrixrow","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:max":{"name":"mml:max","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:max","content":{"type":",","blocks":[]}}},"mml:mean":{"name":"mml:mean","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:mean","content":{"type":",","blocks":[]}}},"mml:median":{"name":"mml:median","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:median","content":{"type":",","blocks":[]}}},"mml:menclose":{"name":"mml:menclose","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"notation":{"name":"notation"}},"elements":{"name":"mml:menclose","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:merror":{"name":"mml:merror","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:merror","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mfenced":{"name":"mml:mfenced","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"open":{"name":"open"},"close":{"name":"close"},"separators":{"name":"separators"}},"elements":{"name":"mml:mfenced","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mfrac":{"name":"mml:mfrac","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"linethickness":{"name":"linethickness"},"numalign":{"name":"numalign"},"denomalign":{"name":"denomalign"},"bevelled":{"name":"bevelled"}},"elements":{"name":"mml:mfrac","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mglyph":{"name":"mml:mglyph","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"src":{"name":"src"},"width":{"name":"width"},"height":{"name":"height"},"valign":{"name":"valign"},"alt":{"name":"alt"},"index":{"name":"index"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mglyph","content":{"type":",","blocks":[]}}},"mml:mi":{"name":"mml:mi","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mi","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:min":{"name":"mml:min","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:min","content":{"type":",","blocks":[]}}},"mml:minus":{"name":"mml:minus","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:minus","content":{"type":",","blocks":[]}}},"mml:mlabeledtr":{"name":"mml:mlabeledtr","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:mlabeledtr","content":{"type":"+","block":"mml:mtd"}}},"mml:mlongdiv":{"name":"mml:mlongdiv","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"shift":{"name":"shift"},"longdivstyle":{"name":"longdivstyle"}},"elements":{"name":"mml:mlongdiv","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]},{"type":"+","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]}}]}}},"mml:mmultiscripts":{"name":"mml:mmultiscripts","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"}},"elements":{"name":"mml:mmultiscripts","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"*","block":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}]}},{"type":"?","block":{"type":",","blocks":["mml:mprescripts",{"type":"*","block":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}]}}]}}]}}},"mml:mn":{"name":"mml:mn","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mn","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mo":{"name":"mml:mo","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"form":{"name":"form"},"fence":{"name":"fence"},"separator":{"name":"separator"},"lspace":{"name":"lspace"},"rspace":{"name":"rspace"},"stretchy":{"name":"stretchy"},"symmetric":{"name":"symmetric"},"maxsize":{"name":"maxsize"},"minsize":{"name":"minsize"},"largeop":{"name":"largeop"},"movablelimits":{"name":"movablelimits"},"accent":{"name":"accent"},"linebreak":{"name":"linebreak"},"lineleading":{"name":"lineleading"},"linebreakstyle":{"name":"linebreakstyle"},"linebreakmultchar":{"name":"linebreakmultchar"},"indentalign":{"name":"indentalign"},"indentshift":{"name":"indentshift"},"indenttarget":{"name":"indenttarget"},"indentalignfirst":{"name":"indentalignfirst"},"indentshiftfirst":{"name":"indentshiftfirst"},"indentalignlast":{"name":"indentalignlast"},"indentshiftlast":{"name":"indentshiftlast"}},"elements":{"name":"mml:mo","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mode":{"name":"mml:mode","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:mode","content":{"type":",","blocks":[]}}},"mml:moment":{"name":"mml:moment","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:moment","content":{"type":",","blocks":[]}}},"mml:momentabout":{"name":"mml:momentabout","type":"element","attributes":{},"elements":{"name":"mml:momentabout","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:mover":{"name":"mml:mover","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"accent":{"name":"accent"},"align":{"name":"align"}},"elements":{"name":"mml:mover","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mpadded":{"name":"mml:mpadded","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"height":{"name":"height"},"depth":{"name":"depth"},"width":{"name":"width"},"lspace":{"name":"lspace"},"voffset":{"name":"voffset"}},"elements":{"name":"mml:mpadded","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mphantom":{"name":"mml:mphantom","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:mphantom","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mprescripts":{"name":"mml:mprescripts","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:mprescripts","content":{"type":",","blocks":[]}}},"mml:mroot":{"name":"mml:mroot","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:mroot","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mrow":{"name":"mml:mrow","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"dir":{"name":"dir"}},"elements":{"name":"mml:mrow","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:ms":{"name":"mml:ms","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"lquote":{"name":"lquote"},"rquote":{"name":"rquote"}},"elements":{"name":"mml:ms","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mscarries":{"name":"mml:mscarries","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"location":{"name":"location"},"crossout":{"name":"crossout"},"scriptsizemultiplier":{"name":"scriptsizemultiplier"}},"elements":{"name":"mml:mscarries","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none","mml:mscarry"]}}}},"mml:mscarry":{"name":"mml:mscarry","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"location":{"name":"location"},"crossout":{"name":"crossout"}},"elements":{"name":"mml:mscarry","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}}}},"mml:msgroup":{"name":"mml:msgroup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"shift":{"name":"shift"}},"elements":{"name":"mml:msgroup","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]}}}},"mml:msline":{"name":"mml:msline","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"},"length":{"name":"length"},"leftoverhang":{"name":"leftoverhang"},"rightoverhang":{"name":"rightoverhang"},"mslinethickness":{"name":"mslinethickness"}},"elements":{"name":"mml:msline","content":{"type":",","blocks":[]}}},"mml:mspace":{"name":"mml:mspace","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"width":{"name":"width"},"height":{"name":"height"},"depth":{"name":"depth"},"linebreak":{"name":"linebreak"}},"elements":{"name":"mml:mspace","content":{"type":",","blocks":[]}}},"mml:msqrt":{"name":"mml:msqrt","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:msqrt","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:msrow":{"name":"mml:msrow","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"position":{"name":"position"}},"elements":{"name":"mml:msrow","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:none"]}}}},"mml:mstack":{"name":"mml:mstack","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"align":{"name":"align"},"stackalign":{"name":"stackalign"},"charalign":{"name":"charalign"},"charspacing":{"name":"charspacing"}},"elements":{"name":"mml:mstack","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction","mml:mscarries","mml:msline","mml:msrow","mml:msgroup"]}}}},"mml:mstyle":{"name":"mml:mstyle","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"scriptlevel":{"name":"scriptlevel"},"displaystyle":{"name":"displaystyle"},"scriptsizemultiplier":{"name":"scriptsizemultiplier"},"scriptminsize":{"name":"scriptminsize"},"infixlinebreakstyle":{"name":"infixlinebreakstyle"},"decimalpoint":{"name":"decimalpoint"},"accent":{"name":"accent"},"accentunder":{"name":"accentunder"},"align":{"name":"align"},"alignmentscope":{"name":"alignmentscope"},"bevelled":{"name":"bevelled"},"charalign":{"name":"charalign"},"charspacing":{"name":"charspacing"},"close":{"name":"close"},"columnalign":{"name":"columnalign"},"columnlines":{"name":"columnlines"},"columnspacing":{"name":"columnspacing"},"columnspan":{"name":"columnspan"},"columnwidth":{"name":"columnwidth"},"crossout":{"name":"crossout"},"denomalign":{"name":"denomalign"},"depth":{"name":"depth"},"dir":{"name":"dir"},"edge":{"name":"edge"},"equalcolumns":{"name":"equalcolumns"},"equalrows":{"name":"equalrows"},"fence":{"name":"fence"},"form":{"name":"form"},"frame":{"name":"frame"},"framespacing":{"name":"framespacing"},"groupalign":{"name":"groupalign"},"height":{"name":"height"},"indentalign":{"name":"indentalign"},"indentalignfirst":{"name":"indentalignfirst"},"indentalignlast":{"name":"indentalignlast"},"indentshift":{"name":"indentshift"},"indentshiftfirst":{"name":"indentshiftfirst"},"indentshiftlast":{"name":"indentshiftlast"},"indenttarget":{"name":"indenttarget"},"largeop":{"name":"largeop"},"leftoverhang":{"name":"leftoverhang"},"length":{"name":"length"},"linebreak":{"name":"linebreak"},"linebreakmultchar":{"name":"linebreakmultchar"},"linebreakstyle":{"name":"linebreakstyle"},"lineleading":{"name":"lineleading"},"linethickness":{"name":"linethickness"},"location":{"name":"location"},"longdivstyle":{"name":"longdivstyle"},"lquote":{"name":"lquote"},"lspace":{"name":"lspace"},"mathsize":{"name":"mathsize"},"mathvariant":{"name":"mathvariant"},"maxsize":{"name":"maxsize"},"minlabelspacing":{"name":"minlabelspacing"},"minsize":{"name":"minsize"},"movablelimits":{"name":"movablelimits"},"mslinethickness":{"name":"mslinethickness"},"notation":{"name":"notation"},"numalign":{"name":"numalign"},"open":{"name":"open"},"position":{"name":"position"},"rightoverhang":{"name":"rightoverhang"},"rowalign":{"name":"rowalign"},"rowlines":{"name":"rowlines"},"rowspacing":{"name":"rowspacing"},"rowspan":{"name":"rowspan"},"rquote":{"name":"rquote"},"rspace":{"name":"rspace"},"selection":{"name":"selection"},"separator":{"name":"separator"},"separators":{"name":"separators"},"shift":{"name":"shift"},"side":{"name":"side"},"stackalign":{"name":"stackalign"},"stretchy":{"name":"stretchy"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"},"symmetric":{"name":"symmetric"},"valign":{"name":"valign"},"width":{"name":"width"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"},"veryverythinmathspace":{"name":"veryverythinmathspace"},"verythinmathspace":{"name":"verythinmathspace"},"thinmathspace":{"name":"thinmathspace"},"mediummathspace":{"name":"mediummathspace"},"thickmathspace":{"name":"thickmathspace"},"verythickmathspace":{"name":"verythickmathspace"},"veryverythickmathspace":{"name":"veryverythickmathspace"}},"elements":{"name":"mml:mstyle","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:msub":{"name":"mml:msub","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"subscriptshift":{"name":"subscriptshift"}},"elements":{"name":"mml:msub","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:msubsup":{"name":"mml:msubsup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"subscriptshift":{"name":"subscriptshift"},"superscriptshift":{"name":"superscriptshift"}},"elements":{"name":"mml:msubsup","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:msup":{"name":"mml:msup","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"superscriptshift":{"name":"superscriptshift"}},"elements":{"name":"mml:msup","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:mtable":{"name":"mml:mtable","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"align":{"name":"align"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"},"alignmentscope":{"name":"alignmentscope"},"columnwidth":{"name":"columnwidth"},"width":{"name":"width"},"rowspacing":{"name":"rowspacing"},"columnspacing":{"name":"columnspacing"},"rowlines":{"name":"rowlines"},"columnlines":{"name":"columnlines"},"frame":{"name":"frame"},"framespacing":{"name":"framespacing"},"equalrows":{"name":"equalrows"},"equalcolumns":{"name":"equalcolumns"},"displaystyle":{"name":"displaystyle"},"side":{"name":"side"},"minlabelspacing":{"name":"minlabelspacing"}},"elements":{"name":"mml:mtable","content":{"type":"*","block":{"type":"|","blocks":["mml:mtr","mml:mlabeledtr"]}}}},"mml:mtd":{"name":"mml:mtd","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"rowspan":{"name":"rowspan"},"columnspan":{"name":"columnspan"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:mtd","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}}}},"mml:mtext":{"name":"mml:mtext","type":"text","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"mathvariant":{"name":"mathvariant"},"mathsize":{"name":"mathsize"},"dir":{"name":"dir"},"fontfamily":{"name":"fontfamily"},"fontweight":{"name":"fontweight"},"fontstyle":{"name":"fontstyle"},"fontsize":{"name":"fontsize"},"color":{"name":"color"},"background":{"name":"background"}},"elements":{"name":"mml:mtext","content":{"type":"*","block":{"type":"|","blocks":["TEXT","mml:mglyph","mml:malignmark"]}}}},"mml:mtr":{"name":"mml:mtr","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"rowalign":{"name":"rowalign"},"columnalign":{"name":"columnalign"},"groupalign":{"name":"groupalign"}},"elements":{"name":"mml:mtr","content":{"type":"*","block":"mml:mtd"}}},"mml:munder":{"name":"mml:munder","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"accentunder":{"name":"accentunder"},"align":{"name":"align"}},"elements":{"name":"mml:munder","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:munderover":{"name":"mml:munderover","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"},"accent":{"name":"accent"},"accentunder":{"name":"accentunder"},"align":{"name":"align"}},"elements":{"name":"mml:munderover","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]}]}}},"mml:naturalnumbers":{"name":"mml:naturalnumbers","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:naturalnumbers","content":{"type":",","blocks":[]}}},"mml:neq":{"name":"mml:neq","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:neq","content":{"type":",","blocks":[]}}},"mml:none":{"name":"mml:none","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"mathcolor":{"name":"mathcolor"},"mathbackground":{"name":"mathbackground"}},"elements":{"name":"mml:none","content":{"type":",","blocks":[]}}},"mml:not":{"name":"mml:not","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:not","content":{"type":",","blocks":[]}}},"mml:notanumber":{"name":"mml:notanumber","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notanumber","content":{"type":",","blocks":[]}}},"mml:notin":{"name":"mml:notin","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notin","content":{"type":",","blocks":[]}}},"mml:notprsubset":{"name":"mml:notprsubset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notprsubset","content":{"type":",","blocks":[]}}},"mml:notsubset":{"name":"mml:notsubset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:notsubset","content":{"type":",","blocks":[]}}},"mml:or":{"name":"mml:or","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:or","content":{"type":",","blocks":[]}}},"mml:otherwise":{"name":"mml:otherwise","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:otherwise","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:outerproduct":{"name":"mml:outerproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:outerproduct","content":{"type":",","blocks":[]}}},"mml:partialdiff":{"name":"mml:partialdiff","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:partialdiff","content":{"type":",","blocks":[]}}},"mml:pi":{"name":"mml:pi","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:pi","content":{"type":",","blocks":[]}}},"mml:piece":{"name":"mml:piece","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:piece","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]},{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}]}}},"mml:piecewise":{"name":"mml:piecewise","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:piecewise","content":{"type":"*","block":{"type":"|","blocks":["mml:piece","mml:otherwise"]}}}},"mml:plus":{"name":"mml:plus","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:plus","content":{"type":",","blocks":[]}}},"mml:power":{"name":"mml:power","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:power","content":{"type":",","blocks":[]}}},"mml:primes":{"name":"mml:primes","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:primes","content":{"type":",","blocks":[]}}},"mml:product":{"name":"mml:product","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:product","content":{"type":",","blocks":[]}}},"mml:prsubset":{"name":"mml:prsubset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:prsubset","content":{"type":",","blocks":[]}}},"mml:quotient":{"name":"mml:quotient","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:quotient","content":{"type":",","blocks":[]}}},"mml:rationals":{"name":"mml:rationals","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:rationals","content":{"type":",","blocks":[]}}},"mml:real":{"name":"mml:real","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:real","content":{"type":",","blocks":[]}}},"mml:reals":{"name":"mml:reals","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:reals","content":{"type":",","blocks":[]}}},"mml:reln":{"name":"mml:reln","type":"element","attributes":{},"elements":{"name":"mml:reln","content":{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}}},"mml:rem":{"name":"mml:rem","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:rem","content":{"type":",","blocks":[]}}},"mml:root":{"name":"mml:root","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:root","content":{"type":",","blocks":[]}}},"mml:scalarproduct":{"name":"mml:scalarproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:scalarproduct","content":{"type":",","blocks":[]}}},"mml:sdev":{"name":"mml:sdev","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sdev","content":{"type":",","blocks":[]}}},"mml:sec":{"name":"mml:sec","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sec","content":{"type":",","blocks":[]}}},"mml:sech":{"name":"mml:sech","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sech","content":{"type":",","blocks":[]}}},"mml:selector":{"name":"mml:selector","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:selector","content":{"type":",","blocks":[]}}},"mml:semantics":{"name":"mml:semantics","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"cd":{"name":"cd"},"name":{"name":"name"}},"elements":{"name":"mml:semantics","content":{"type":",","blocks":[{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs","mml:mi","mml:mn","mml:mo","mml:mtext","mml:mspace","mml:ms","mml:maligngroup","mml:malignmark","mml:mrow","mml:mfrac","mml:msqrt","mml:mroot","mml:mstyle","mml:merror","mml:mpadded","mml:mphantom","mml:mfenced","mml:menclose","mml:msub","mml:msup","mml:msubsup","mml:munder","mml:mover","mml:munderover","mml:mmultiscripts","mml:mtable","mml:mstack","mml:mlongdiv","mml:maction"]},{"type":"*","block":{"type":"|","blocks":["mml:annotation","mml:annotation-xml"]}}]}}},"mml:sep":{"name":"mml:sep","type":"element","attributes":{},"elements":{"name":"mml:sep","content":{"type":",","blocks":[]}}},"mml:set":{"name":"mml:set","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"}},"elements":{"name":"mml:set","content":{"type":",","blocks":[{"type":"*","block":{"type":"*","block":"mml:bvar"}},{"type":"*","block":{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:setdiff":{"name":"mml:setdiff","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:setdiff","content":{"type":",","blocks":[]}}},"mml:share":{"name":"mml:share","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"src":{"name":"src"}},"elements":{"name":"mml:share","content":{"type":",","blocks":[]}}},"mml:sin":{"name":"mml:sin","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sin","content":{"type":",","blocks":[]}}},"mml:sinh":{"name":"mml:sinh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sinh","content":{"type":",","blocks":[]}}},"mml:subset":{"name":"mml:subset","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:subset","content":{"type":",","blocks":[]}}},"mml:sum":{"name":"mml:sum","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:sum","content":{"type":",","blocks":[]}}},"mml:tan":{"name":"mml:tan","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:tan","content":{"type":",","blocks":[]}}},"mml:tanh":{"name":"mml:tanh","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:tanh","content":{"type":",","blocks":[]}}},"mml:tendsto":{"name":"mml:tendsto","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"},"type":{"name":"type"}},"elements":{"name":"mml:tendsto","content":{"type":",","blocks":[]}}},"mml:times":{"name":"mml:times","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:times","content":{"type":",","blocks":[]}}},"mml:transpose":{"name":"mml:transpose","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:transpose","content":{"type":",","blocks":[]}}},"mml:true":{"name":"mml:true","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:true","content":{"type":",","blocks":[]}}},"mml:union":{"name":"mml:union","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:union","content":{"type":",","blocks":[]}}},"mml:uplimit":{"name":"mml:uplimit","type":"element","attributes":{},"elements":{"name":"mml:uplimit","content":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}},"mml:variance":{"name":"mml:variance","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:variance","content":{"type":",","blocks":[]}}},"mml:vector":{"name":"mml:vector","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:vector","content":{"type":",","blocks":[{"type":"*","block":"mml:bvar"},{"type":"*","block":{"type":"|","blocks":["mml:domainofapplication","mml:condition",{"type":",","blocks":["mml:lowlimit",{"type":"?","block":"mml:uplimit"}]}]}},{"type":"*","block":{"type":"|","blocks":["mml:piecewise","mml:reln","mml:fn","mml:declare","mml:interval","mml:inverse","mml:ident","mml:domain","mml:codomain","mml:image","mml:ln","mml:log","mml:moment","mml:lambda","mml:compose","mml:quotient","mml:divide","mml:minus","mml:power","mml:rem","mml:root","mml:factorial","mml:abs","mml:conjugate","mml:arg","mml:real","mml:imaginary","mml:floor","mml:ceiling","mml:exp","mml:max","mml:min","mml:plus","mml:times","mml:gcd","mml:lcm","mml:and","mml:or","mml:xor","mml:not","mml:implies","mml:equivalent","mml:forall","mml:exists","mml:eq","mml:gt","mml:lt","mml:geq","mml:leq","mml:neq","mml:approx","mml:factorof","mml:tendsto","mml:int","mml:diff","mml:partialdiff","mml:divergence","mml:grad","mml:curl","mml:laplacian","mml:set","mml:list","mml:union","mml:intersect","mml:cartesianproduct","mml:in","mml:notin","mml:notsubset","mml:notprsubset","mml:setdiff","mml:subset","mml:prsubset","mml:card","mml:sum","mml:product","mml:limit","mml:sin","mml:cos","mml:tan","mml:sec","mml:csc","mml:cot","mml:sinh","mml:cosh","mml:tanh","mml:sech","mml:csch","mml:coth","mml:arcsin","mml:arccos","mml:arctan","mml:arccosh","mml:arccot","mml:arccoth","mml:arccsc","mml:arccsch","mml:arcsec","mml:arcsech","mml:arcsinh","mml:arctanh","mml:mean","mml:sdev","mml:variance","mml:median","mml:mode","mml:vector","mml:matrix","mml:matrixrow","mml:determinant","mml:transpose","mml:selector","mml:vectorproduct","mml:scalarproduct","mml:outerproduct","mml:integers","mml:reals","mml:rationals","mml:naturalnumbers","mml:complexes","mml:primes","mml:emptyset","mml:exponentiale","mml:imaginaryi","mml:notanumber","mml:true","mml:false","mml:pi","mml:eulergamma","mml:infinity","mml:semantics","mml:cn","mml:ci","mml:csymbol","mml:apply","mml:bind","mml:share","mml:cerror","mml:cbytes","mml:cs"]}}]}}},"mml:vectorproduct":{"name":"mml:vectorproduct","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:vectorproduct","content":{"type":",","blocks":[]}}},"mml:xor":{"name":"mml:xor","type":"element","attributes":{"xlink:href":{"name":"xlink:href"},"xlink:type":{"name":"xlink:type"},"xml:lang":{"name":"xml:lang"},"xml:space":{"name":"xml:space"},"id":{"name":"id"},"xref":{"name":"xref"},"class":{"name":"class"},"style":{"name":"style"},"href":{"name":"href"},"other":{"name":"other"},"encoding":{"name":"encoding"},"definitionURL":{"name":"definitionURL"}},"elements":{"name":"mml:xor","content":{"type":",","blocks":[]}}},"monospace":{"name":"monospace","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"monospace","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"month":{"name":"month","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"month","content":"TEXT"}},"name":{"name":"name","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"name-style":{"name":"name-style"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"name","content":{"type":",","blocks":[{"type":"|","blocks":[{"type":",","blocks":["surname",{"type":"?","block":"given-names"}]},"given-names"]},{"type":"?","block":"prefix"},{"type":"?","block":"suffix"}]}}},"name-alternatives":{"name":"name-alternatives","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"name-alternatives","content":{"type":"+","block":{"type":"|","blocks":["name","string-name"]}}}},"named-content":{"name":"named-content","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"alt":{"name":"alt"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"named-content","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","inline-graphic","private-char","chem-struct","inline-formula","def-list","list","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","disp-quote","speech","statement","verse-group"]}}}},"nested-kwd":{"name":"nested-kwd","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"nested-kwd","content":{"type":",","blocks":[{"type":"+","block":{"type":"|","blocks":["kwd","compound-kwd"]}},{"type":"*","block":"nested-kwd"}]}}},"nlm-citation":{"name":"nlm-citation","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"publication-type":{"name":"publication-type"},"publisher-type":{"name":"publisher-type"},"publication-format":{"name":"publication-format"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"nlm-citation","content":{"type":",","blocks":[{"type":"*","block":{"type":"|","blocks":["person-group","collab"]}},{"type":"*","block":{"type":"|","blocks":["article-title","trans-title"]}},{"type":"?","block":"source"},{"type":"?","block":"patent"},{"type":"?","block":"trans-source"},{"type":"?","block":"year"},{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"month"},{"type":"?","block":"day"},{"type":"?","block":"time-stamp"}]},{"type":"?","block":"season"}]},{"type":"?","block":"access-date"},{"type":"?","block":"volume"},{"type":"?","block":"edition"},{"type":"?","block":"conf-name"},{"type":"?","block":"conf-date"},{"type":"?","block":"conf-loc"},{"type":"*","block":{"type":"|","blocks":["issue","supplement"]}},{"type":"?","block":"publisher-loc"},{"type":"?","block":"publisher-name"},{"type":"*","block":{"type":",","blocks":[{"type":"?","block":"fpage"},{"type":"?","block":"lpage"}]}},{"type":"?","block":"page-count"},{"type":"?","block":"series"},{"type":"*","block":"comment"},{"type":"*","block":"pub-id"},{"type":"?","block":"annotation"}]}}},"note":{"name":"note","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"note","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"+","block":{"type":"|","blocks":["p","product"]}}]}}},"notes":{"name":"notes","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"notes-type":{"name":"notes-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"notes","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["fn-group","glossary","ref-list"]}}]}}},"oasis:colspec":{"name":"oasis:colspec","type":"element","attributes":{"colnum":{"name":"colnum"},"colname":{"name":"colname"},"colwidth":{"name":"colwidth"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:colspec","content":{"type":",","blocks":[]}}},"oasis:entry":{"name":"oasis:entry","type":"text","attributes":{"colname":{"name":"colname"},"namest":{"name":"namest"},"nameend":{"name":"nameend"},"morerows":{"name":"morerows"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:entry","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","hr","inline-supplementary-material","related-article","related-object","disp-formula","disp-formula-group","break","citation-alternatives","element-citation","mixed-citation","nlm-citation","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","chem-struct","inline-formula","def-list","list","tex-math","mml:math","p","abbrev","milestone-end","milestone-start","named-content","styled-content","alternatives","array","code","graphic","media","preformat","inline-graphic","private-char","fn","target","xref","sub","sup"]}}}},"oasis:row":{"name":"oasis:row","type":"element","attributes":{"rowsep":{"name":"rowsep"},"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:row","content":{"type":"+","block":"oasis:entry"}}},"oasis:table":{"name":"oasis:table","type":"element","attributes":{"frame":{"name":"frame"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"content-type":{"name":"content-type"}},"elements":{"name":"oasis:table","content":{"type":"+","block":"oasis:tgroup"}}},"oasis:tbody":{"name":"oasis:tbody","type":"element","attributes":{"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:tbody","content":{"type":"+","block":"oasis:row"}}},"oasis:tgroup":{"name":"oasis:tgroup","type":"element","attributes":{"cols":{"name":"cols"},"colsep":{"name":"colsep"},"rowsep":{"name":"rowsep"},"align":{"name":"align"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:tgroup","content":{"type":",","blocks":[{"type":"*","block":"oasis:colspec"},{"type":"?","block":"oasis:thead"},"oasis:tbody"]}}},"oasis:thead":{"name":"oasis:thead","type":"element","attributes":{"valign":{"name":"valign"},"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"oasis:thead","content":{"type":"+","block":"oasis:row"}}},"object-id":{"name":"object-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"object-id","content":"TEXT"}},"on-behalf-of":{"name":"on-behalf-of","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"on-behalf-of","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content","institution","institution-wrap","fn","target","xref"]}}}},"open-access":{"name":"open-access","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"open-access","content":{"type":"+","block":"p"}}},"overline":{"name":"overline","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"overline","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"overline-end":{"name":"overline-end","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"}},"elements":{"name":"overline-end","content":{"type":",","blocks":[]}}},"overline-start":{"name":"overline-start","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"overline-start","content":{"type":",","blocks":[]}}},"p":{"name":"p","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"p","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","citation-alternatives","element-citation","mixed-citation","nlm-citation","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","award-id","funding-source","open-access","chem-struct","inline-formula","inline-graphic","private-char","def-list","list","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","disp-quote","speech","statement","verse-group","fn","target","xref","sub","sup"]}}}},"page-count":{"name":"page-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"page-count","content":{"type":",","blocks":[]}}},"page-range":{"name":"page-range","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"page-range","content":"TEXT"}},"part-title":{"name":"part-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"part-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"patent":{"name":"patent","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"country":{"name":"country"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"patent","content":{"type":"*","block":"TEXT"}}},"permissions":{"name":"permissions","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"permissions","content":{"type":",","blocks":[{"type":"*","block":"copyright-statement"},{"type":"*","block":"copyright-year"},{"type":"*","block":"copyright-holder"},{"type":"*","block":{"type":"|","blocks":["ali:free_to_read","license"]}}]}}},"person-group":{"name":"person-group","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"person-group-type":{"name":"person-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"person-group","content":{"type":"*","block":{"type":"|","blocks":["TEXT","anonymous","collab","collab-alternatives","name","name-alternatives","aff","aff-alternatives","etal","role","string-name"]}}}},"phone":{"name":"phone","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"phone","content":{"type":"*","block":"TEXT"}}},"postal-code":{"name":"postal-code","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"postal-code","content":{"type":"*","block":"TEXT"}}},"prefix":{"name":"prefix","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"prefix","content":{"type":"*","block":"TEXT"}}},"preformat":{"name":"preformat","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"preformat-type":{"name":"preformat-type"},"xml:space":{"name":"xml:space"}},"elements":{"name":"preformat","content":{"type":"*","block":{"type":"|","blocks":["TEXT","alt-text","long-desc","email","ext-link","uri","attrib","permissions","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup"]}}}},"price":{"name":"price","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"currency":{"name":"currency"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"price","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby"]}}}},"principal-award-recipient":{"name":"principal-award-recipient","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"principal-award-recipient","content":{"type":"*","block":{"type":"|","blocks":["TEXT","contrib-id","name","name-alternatives","institution","institution-wrap","string-name"]}}}},"principal-investigator":{"name":"principal-investigator","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"principal-investigator","content":{"type":"*","block":{"type":"|","blocks":["TEXT","contrib-id","name","name-alternatives","string-name"]}}}},"private-char":{"name":"private-char","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"description":{"name":"description"},"name":{"name":"name"},"specific-use":{"name":"specific-use"}},"elements":{"name":"private-char","content":{"type":"|","blocks":["glyph-data","glyph-ref",{"type":"*","block":"inline-graphic"}]}}},"product":{"name":"product","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"product-type":{"name":"product-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"product","content":{"type":"*","block":{"type":"|","blocks":["TEXT","inline-supplementary-material","related-article","related-object","break","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","price","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","fn","target","xref","sub","sup"]}}}},"pub-date":{"name":"pub-date","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-type":{"name":"pub-type"},"publication-format":{"name":"publication-format"},"date-type":{"name":"date-type"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"pub-date","content":{"type":",","blocks":[{"type":"?","block":{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"day"},{"type":"?","block":"month"}]},"season"]}},"year",{"type":"?","block":"era"}]}}},"pub-id":{"name":"pub-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"assigning-authority":{"name":"assigning-authority"},"specific-use":{"name":"specific-use"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"pub-id","content":"TEXT"}},"publisher":{"name":"publisher","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"publisher","content":{"type":"+","block":{"type":",","blocks":["publisher-name",{"type":"?","block":"publisher-loc"}]}}}},"publisher-loc":{"name":"publisher-loc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"publisher-loc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","addr-line","city","country","fax","institution","institution-wrap","phone","postal-code","state","email","ext-link","uri"]}}}},"publisher-name":{"name":"publisher-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"publisher-name","content":{"type":"*","block":{"type":"|","blocks":["TEXT","institution","institution-wrap"]}}}},"rb":{"name":"rb","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"rb","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline"]}}}},"ref":{"name":"ref","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"ref","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"+","block":{"type":"|","blocks":["citation-alternatives","element-citation","mixed-citation","nlm-citation","note"]}}]}}},"ref-count":{"name":"ref-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"ref-count","content":{"type":",","blocks":[]}}},"ref-list":{"name":"ref-list","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"ref-list","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"ref"},{"type":"*","block":"ref-list"}]}}},"related-article":{"name":"related-article","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"related-article-type":{"name":"related-article-type"},"ext-link-type":{"name":"ext-link-type"},"vol":{"name":"vol"},"page":{"name":"page"},"issue":{"name":"issue"},"elocation-id":{"name":"elocation-id"},"journal-id":{"name":"journal-id"},"journal-id-type":{"name":"journal-id-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"related-article","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","journal-id","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","sub","sup"]}}}},"related-object":{"name":"related-object","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"link-type":{"name":"link-type"},"ext-link-type":{"name":"ext-link-type"},"source-id":{"name":"source-id"},"source-id-type":{"name":"source-id-type"},"source-type":{"name":"source-type"},"document-id":{"name":"document-id"},"document-id-type":{"name":"document-id-type"},"document-type":{"name":"document-type"},"object-id":{"name":"object-id"},"object-id-type":{"name":"object-id-type"},"object-type":{"name":"object-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"related-object","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","annotation","article-title","chapter-title","collab","collab-alternatives","comment","conf-acronym","conf-date","conf-loc","conf-name","conf-sponsor","data-title","date","date-in-citation","day","edition","email","elocation-id","etal","ext-link","fpage","gov","institution","institution-wrap","isbn","issn","issn-l","issue","issue-id","issue-part","issue-title","lpage","month","name","name-alternatives","object-id","page-range","part-title","patent","person-group","pub-id","publisher-loc","publisher-name","role","season","series","size","source","std","string-name","supplement","trans-source","trans-title","uri","version","volume","volume-id","volume-series","year","sub","sup"]}}}},"response":{"name":"response","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"response-type":{"name":"response-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"response","content":{"type":",","blocks":[{"type":"|","blocks":["front","front-stub"]},{"type":"?","block":"body"},{"type":"?","block":"back"},{"type":"?","block":"floats-group"}]}}},"role":{"name":"role","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"role","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content"]}}}},"roman":{"name":"roman","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"roman","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"rp":{"name":"rp","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"rp","content":"TEXT"}},"rt":{"name":"rt","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"rt","content":{"type":"*","block":"TEXT"}}},"ruby":{"name":"ruby","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"ruby","content":{"type":",","blocks":["rb","rt"]}}},"sans-serif":{"name":"sans-serif","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sans-serif","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"sc":{"name":"sc","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sc","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"season":{"name":"season","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"season","content":"TEXT"}},"sec":{"name":"sec","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"xml:lang":{"name":"xml:lang"},"sec-type":{"name":"sec-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sec","content":{"type":",","blocks":[{"type":"?","block":"sec-meta"},{"type":"|","blocks":[{"type":",","blocks":["label",{"type":"?","block":"title"}]},"title"]},{"type":"*","block":{"type":"|","blocks":["address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","def-list","list","tex-math","mml:math","p","related-article","related-object","disp-quote","speech","statement","verse-group"]}},{"type":"*","block":"sec"},{"type":"*","block":{"type":"|","blocks":["fn-group","glossary","ref-list"]}}]}}},"sec-meta":{"name":"sec-meta","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"sec-meta","content":{"type":",","blocks":[{"type":"*","block":"contrib-group"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"?","block":"permissions"}]}}},"self-uri":{"name":"self-uri","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"self-uri","content":{"type":"*","block":"TEXT"}}},"series":{"name":"series","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"series","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content"]}}}},"series-text":{"name":"series-text","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"series-text","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content"]}}}},"series-title":{"name":"series-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"series-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content"]}}}},"sig":{"name":"sig","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"sig","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","sub","sup","named-content","styled-content","break","inline-graphic","private-char","graphic","media"]}}}},"sig-block":{"name":"sig-block","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sig-block","content":{"type":"*","block":{"type":"|","blocks":["TEXT","break","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","graphic","media","inline-graphic","private-char","named-content","styled-content","sig","sub","sup"]}}}},"size":{"name":"size","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"units":{"name":"units"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"size","content":{"type":"*","block":"TEXT"}}},"source":{"name":"source","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"source","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"speaker":{"name":"speaker","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"speaker","content":{"type":"*","block":{"type":"|","blocks":["TEXT","degrees","given-names","prefix","surname","suffix","fn","target","xref"]}}}},"speech":{"name":"speech","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"speech","content":{"type":",","blocks":["speaker",{"type":"+","block":"p"}]}}},"state":{"name":"state","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"state","content":{"type":"*","block":"TEXT"}}},"statement":{"name":"statement","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"statement","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"+","block":{"type":"|","blocks":["p","statement"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"std":{"name":"std","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"std","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","day","month","pub-id","source","std-organization","year","sub","sup"]}}}},"std-organization":{"name":"std-organization","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"std-organization","content":{"type":"*","block":{"type":"|","blocks":["TEXT","institution","institution-wrap","sub","sup"]}}}},"strike":{"name":"strike","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"specific-use":{"name":"specific-use"}},"elements":{"name":"strike","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"string-conf":{"name":"string-conf","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"string-conf","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","conf-date","conf-name","conf-num","conf-loc","conf-sponsor","conf-theme","conf-acronym","string-conf"]}}}},"string-date":{"name":"string-date","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"string-date","content":{"type":"*","block":{"type":"|","blocks":["TEXT","day","era","month","season","year"]}}}},"string-name":{"name":"string-name","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"name-style":{"name":"name-style"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"string-name","content":{"type":"*","block":{"type":"|","blocks":["TEXT","degrees","given-names","prefix","surname","suffix"]}}}},"styled-content":{"name":"styled-content","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"style":{"name":"style"},"style-type":{"name":"style-type"},"alt":{"name":"alt"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"styled-content","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","address","alternatives","array","boxed-text","chem-struct-wrap","code","fig","fig-group","graphic","media","preformat","supplementary-material","table-wrap","table-wrap-group","disp-formula","disp-formula-group","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","inline-graphic","private-char","chem-struct","inline-formula","def-list","list","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","disp-quote","speech","statement","verse-group"]}}}},"sub":{"name":"sub","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"arrange":{"name":"arrange"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sub","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"sub-article":{"name":"sub-article","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"article-type":{"name":"article-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"sub-article","content":{"type":",","blocks":[{"type":"|","blocks":["front","front-stub"]},{"type":"?","block":"body"},{"type":"?","block":"back"},{"type":"?","block":"floats-group"},{"type":"|","blocks":[{"type":"*","block":"sub-article"},{"type":"*","block":"response"}]}]}}},"subj-group":{"name":"subj-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"subj-group-type":{"name":"subj-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"subj-group","content":{"type":",","blocks":[{"type":"+","block":{"type":"|","blocks":["subject","compound-subject"]}},{"type":"*","block":"subj-group"}]}}},"subject":{"name":"subject","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"}},"elements":{"name":"subject","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","named-content","styled-content","sub","sup"]}}}},"subtitle":{"name":"subtitle","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"subtitle","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","break"]}}}},"suffix":{"name":"suffix","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"suffix","content":{"type":"*","block":"TEXT"}}},"sup":{"name":"sup","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"arrange":{"name":"arrange"},"specific-use":{"name":"specific-use"}},"elements":{"name":"sup","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"supplement":{"name":"supplement","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"supplement-type":{"name":"supplement-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"supplement","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","contrib-group","title"]}}}},"supplementary-material":{"name":"supplementary-material","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"},"mimetype":{"name":"mimetype"},"mime-subtype":{"name":"mime-subtype"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"supplementary-material","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-formula","disp-formula-group","chem-struct-wrap","disp-quote","speech","statement","verse-group","table-wrap","p","def-list","list","alternatives","array","code","graphic","media","preformat"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"surname":{"name":"surname","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"initials":{"name":"initials"}},"elements":{"name":"surname","content":{"type":"*","block":"TEXT"}}},"table":{"name":"table","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"summary":{"name":"summary"},"width":{"name":"width"},"border":{"name":"border"},"frame":{"name":"frame"},"rules":{"name":"rules"},"cellspacing":{"name":"cellspacing"},"cellpadding":{"name":"cellpadding"},"specific-use":{"name":"specific-use"}},"elements":{"name":"table","content":{"type":",","blocks":[{"type":"|","blocks":[{"type":"*","block":"col"},{"type":"*","block":"colgroup"}]},{"type":"|","blocks":[{"type":",","blocks":[{"type":"?","block":"thead"},{"type":"?","block":"tfoot"},{"type":"+","block":"tbody"}]},{"type":"+","block":"tr"}]}]}}},"table-count":{"name":"table-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"table-count","content":{"type":",","blocks":[]}}},"table-wrap":{"name":"table-wrap","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"table-wrap","content":{"type":",","blocks":[{"type":"*","block":"object-id"},{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"*","block":{"type":"|","blocks":["disp-quote","speech","statement","verse-group","def-list","list","alternatives","chem-struct-wrap","code","graphic","media","preformat","table","oasis:table"]}},{"type":"*","block":{"type":"|","blocks":["table-wrap-foot","attrib","permissions"]}}]}}},"table-wrap-foot":{"name":"table-wrap-foot","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"table-wrap-foot","content":{"type":",","blocks":[{"type":"?","block":"title"},{"type":"+","block":{"type":"|","blocks":["p","fn-group","fn","attrib","permissions"]}}]}}},"table-wrap-group":{"name":"table-wrap-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"position":{"name":"position"},"orientation":{"name":"orientation"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"content-type":{"name":"content-type"}},"elements":{"name":"table-wrap-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"caption"},{"type":"*","block":"abstract"},{"type":"*","block":"kwd-group"},{"type":"*","block":{"type":"|","blocks":["alt-text","long-desc","email","ext-link","uri"]}},{"type":"+","block":"table-wrap"}]}}},"target":{"name":"target","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"target-type":{"name":"target-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"target","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"tbody":{"name":"tbody","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"tbody","content":{"type":"+","block":"tr"}}},"td":{"name":"td","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"abbr":{"name":"abbr"},"axis":{"name":"axis"},"headers":{"name":"headers"},"scope":{"name":"scope"},"rowspan":{"name":"rowspan"},"colspan":{"name":"colspan"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"td","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","hr","inline-supplementary-material","related-article","related-object","disp-formula","disp-formula-group","break","citation-alternatives","element-citation","mixed-citation","nlm-citation","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","chem-struct","inline-formula","def-list","list","tex-math","mml:math","p","abbrev","milestone-end","milestone-start","named-content","styled-content","alternatives","array","code","graphic","media","preformat","inline-graphic","private-char","fn","target","xref","sub","sup"]}}}},"term":{"name":"term","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"term","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","disp-formula","disp-formula-group","array","code","graphic","media","preformat"]}}}},"term-head":{"name":"term-head","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"term-head","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"tex-math":{"name":"tex-math","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"notation":{"name":"notation"},"version":{"name":"version"}},"elements":{"name":"tex-math","content":"TEXT"}},"textual-form":{"name":"textual-form","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"textual-form","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","inline-graphic","private-char","tex-math","mml:math","named-content","styled-content","sub","sup"]}}}},"tfoot":{"name":"tfoot","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"tfoot","content":{"type":"+","block":"tr"}}},"th":{"name":"th","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"abbr":{"name":"abbr"},"axis":{"name":"axis"},"headers":{"name":"headers"},"scope":{"name":"scope"},"rowspan":{"name":"rowspan"},"colspan":{"name":"colspan"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"th","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","hr","inline-supplementary-material","related-article","related-object","disp-formula","disp-formula-group","break","citation-alternatives","element-citation","mixed-citation","nlm-citation","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","chem-struct","inline-formula","def-list","list","tex-math","mml:math","p","abbrev","milestone-end","milestone-start","named-content","styled-content","alternatives","array","code","graphic","media","preformat","inline-graphic","private-char","fn","target","xref","sub","sup"]}}}},"thead":{"name":"thead","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"thead","content":{"type":"+","block":"tr"}}},"time-stamp":{"name":"time-stamp","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"time-stamp","content":{"type":"*","block":"TEXT"}}},"title":{"name":"title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"}},"elements":{"name":"title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","break","citation-alternatives","element-citation","mixed-citation","nlm-citation"]}}}},"title-group":{"name":"title-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"}},"elements":{"name":"title-group","content":{"type":",","blocks":["article-title",{"type":"*","block":"subtitle"},{"type":"*","block":"trans-title-group"},{"type":"*","block":"alt-title"},{"type":"?","block":"fn-group"}]}}},"tr":{"name":"tr","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"style":{"name":"style"},"align":{"name":"align"},"char":{"name":"char"},"charoff":{"name":"charoff"},"valign":{"name":"valign"}},"elements":{"name":"tr","content":{"type":"+","block":{"type":"|","blocks":["th","td"]}}}},"trans-abstract":{"name":"trans-abstract","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"abstract-type":{"name":"abstract-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-abstract","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"*","block":"p"},{"type":"*","block":"sec"}]}}},"trans-source":{"name":"trans-source","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-source","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"trans-subtitle":{"name":"trans-subtitle","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-subtitle","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","break"]}}}},"trans-title":{"name":"trans-title","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-title","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup","break"]}}}},"trans-title-group":{"name":"trans-title-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"trans-title-group","content":{"type":",","blocks":["trans-title",{"type":"*","block":"trans-subtitle"}]}}},"underline":{"name":"underline","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"toggle":{"name":"toggle"},"underline-style":{"name":"underline-style"},"specific-use":{"name":"specific-use"}},"elements":{"name":"underline","content":{"type":"*","block":{"type":"|","blocks":["TEXT","email","ext-link","uri","inline-supplementary-material","related-article","related-object","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","tex-math","mml:math","abbrev","milestone-end","milestone-start","named-content","styled-content","fn","target","xref","sub","sup"]}}}},"underline-end":{"name":"underline-end","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"}},"elements":{"name":"underline-end","content":{"type":",","blocks":[]}}},"underline-start":{"name":"underline-start","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"specific-use":{"name":"specific-use"}},"elements":{"name":"underline-start","content":{"type":",","blocks":[]}}},"unstructured-kwd-group":{"name":"unstructured-kwd-group","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"kwd-group-type":{"name":"kwd-group-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"unstructured-kwd-group","content":{"type":"*","block":"TEXT"}}},"uri":{"name":"uri","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"uri","content":{"type":"*","block":"TEXT"}}},"verse-group":{"name":"verse-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"verse-group","content":{"type":",","blocks":[{"type":"?","block":"label"},{"type":"?","block":"title"},{"type":"?","block":"subtitle"},{"type":"+","block":{"type":"|","blocks":["verse-line","verse-group"]}},{"type":"*","block":{"type":"|","blocks":["attrib","permissions"]}}]}}},"verse-line":{"name":"verse-line","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"verse-line","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","alternatives","inline-graphic","private-char","chem-struct","inline-formula","abbrev","milestone-end","milestone-start","named-content","styled-content","sub","sup","fn","target","xref"]}}}},"version":{"name":"version","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"designator":{"name":"designator"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"version","content":{"type":"*","block":{"type":"|","blocks":["TEXT","sub","sup"]}}}},"volume":{"name":"volume","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"seq":{"name":"seq"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"volume","content":{"type":"*","block":"TEXT"}}},"volume-id":{"name":"volume-id","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"pub-id-type":{"name":"pub-id-type"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"},"xlink:type":{"name":"xlink:type"},"xlink:href":{"name":"xlink:href"},"xlink:role":{"name":"xlink:role"},"xlink:title":{"name":"xlink:title"},"xlink:show":{"name":"xlink:show"},"xlink:actuate":{"name":"xlink:actuate"}},"elements":{"name":"volume-id","content":{"type":"*","block":"TEXT"}}},"volume-issue-group":{"name":"volume-issue-group","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"volume-issue-group","content":{"type":",","blocks":[{"type":"*","block":"volume"},{"type":"*","block":"volume-id"},{"type":"?","block":"volume-series"},{"type":"*","block":"issue"},{"type":"*","block":"issue-id"},{"type":"*","block":"issue-title"},{"type":"*","block":"issue-sponsor"},{"type":"?","block":"issue-part"}]}}},"volume-series":{"name":"volume-series","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"volume-series","content":{"type":"*","block":"TEXT"}}},"word-count":{"name":"word-count","type":"element","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"count":{"name":"count"}},"elements":{"name":"word-count","content":{"type":",","blocks":[]}}},"x":{"name":"x","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"xml:space":{"name":"xml:space"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"x","content":{"type":"*","block":"TEXT"}}},"xref":{"name":"xref","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"alt":{"name":"alt"},"ref-type":{"name":"ref-type"},"rid":{"name":"rid"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"xref","content":{"type":"*","block":{"type":"|","blocks":["TEXT","bold","fixed-case","italic","monospace","overline","roman","sans-serif","sc","strike","underline","ruby","named-content","styled-content","sub","sup"]}}}},"year":{"name":"year","type":"text","attributes":{"id":{"name":"id"},"xml:base":{"name":"xml:base"},"content-type":{"name":"content-type"},"iso-8601-date":{"name":"iso-8601-date"},"calendar":{"name":"calendar"},"specific-use":{"name":"specific-use"},"xml:lang":{"name":"xml:lang"}},"elements":{"name":"year","content":"TEXT"}}}};

const JATSPublishing = substance.XMLSchema.fromJSON(JATSPublishingData);

// TODO: this should come from compilation
JATSPublishing.getName = function() {
  return 'jats'
};

JATSPublishing.getVersion = function() {
  return '1.1'
};

JATSPublishing.getDocTypeParams = function() {
  return [
    'article',
    '-//NLM//DTD JATS (Z39.96) Journal Publishing DTD v1.0 20120330//EN',
    'JATS-journalpublishing1.dtd'
  ]
};


const JATS4R = substance.XMLSchema.fromJSON(JATS4RData);


// TODO: this should come from compilation
JATS4R.getName = function() {
  return 'jats4r'
};

JATS4R.getVersion = function() {
  return '1.1'
};

JATS4R.getDocTypeParams = function() {
  return ['article', 'JATS4R 1.1', 'http://texture.substance.io/JATS4R-1.1.dtd']
};


const TextureJATS = substance.XMLSchema.fromJSON(TextureJATSData);

// TODO: this should come from compilation
TextureJATS.getName = function() {
  return 'texture-jats'
};

TextureJATS.getVersion = function() {
  return '1.1'
};

TextureJATS.getDocTypeParams = function() {
  return ['article', 'TextureJATS 1.1', 'http://texture.substance.io/TextureJATS-1.1.dtd']
};


TextureJATS.uri = "http://texture.substance.io/jats/1.1/TextureJATS.dtd";

class SaveHandler {

  constructor(context) {
    this.context = context;
  }

  saveDocument({editorSession}) {
    return new Promise((resolve, reject) => {
      let exporter = this.context.exporter;
      let doc = editorSession.getDocument();
      let dom = doc.toXML();
      let jatsDom = exporter.export(dom);
      let xml = jatsDom.serialize();
      // console.info('Exported XML', jatsDom.getNativeElement())
      // console.info('Exported XML', xml)
      this.context.xmlStore.writeXML(this.context.documentId, xml, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    })
  }
}

// left side: node type
// right side: ref-type
const REF_TYPES = {
  'fig': 'fig',
  'fig-group': 'fig',
  'fn': 'fn',
  'ref': 'bibr',
  'table-wrap': 'table',
  'table-wrap-group': 'table'
};


const XREF_TARGET_TYPES = Object.keys(REF_TYPES).reduce((m, type) => {
  const refType = REF_TYPES[type];
  if (!m[refType]) m[refType] = [];
  m[refType].push(type);
  return m
}, {});

function getXrefTargets(xref) {
  let idrefs = xref.getAttribute('rid');
  if (idrefs) {
    return idrefs.split(' ')
  } else {
    return []
  }
}

/*
  Computes available targets for a given xref node

  Returns an array of entries with all info needed by XRefTargets to render
  [
    {
      selected: true,
      node: TARGET_NODE
    }
    ,...
  ]
*/
function getAvailableXrefTargets(node, labelGenerator) {
  let doc = node.getDocument();
  let selectedTargets = getXrefTargets(node);
  let nodesByType = doc.getIndex('type');
  let refType = node.getAttribute('ref-type');
  let targetTypes = XREF_TARGET_TYPES[refType];
  let targets = [];

  targetTypes.forEach((targetType) => {
    let nodesForType = substance.map(nodesByType.get(targetType)).filter((node) => {
      return Boolean(node.parentNode)
    });
    nodesForType.forEach(function(node) {
      let isSelected = substance.includes(selectedTargets, node.id);
      targets.push({
        selected: isSelected,
        node: node,
        position: labelGenerator.getPosition('bibr', node.id)
      });
    });
  });

  // Makes the selected targets go to top
  targets = substance.orderBy(targets, ['selected', 'position'], ['desc', 'asc']);
  return targets
}

const { CREATE, DELETE, SET, UPDATE } = substance.ObjectOperation;

/*
  @example

  ```js
  let doc = {}
  // NOTE: Supported ref-types are hard-coded for now
  let labelGenerator = new NumberedLabelGenerator(editorSession, this.exporter, {
    'bibr': function(targets) {
      let positions = targets.map(t => t.position)
      return '[' + (positions.join(', ') || '???') + ']'
    },
    'fig': function(targets) {
      let positions = targets.map(t => t.position)
      return 'Figure ' + (positions.join(', ') || '???')
    },
    'table': function(targets) {
      let positions = targets.map(t => t.position)
      return 'Table ' + (positions.join(', ') || '???')
    },
    // E.g. eLife videos are refernced as other
    'other': function(targets) {
      let positions = targets.map(t => t.position)
      return 'Other ' + (positions.join(', ') || '???')
    }
  })

  labelGenerator.getPosition('fig', 'fig-bacteria') => 1
  labelGenerator.getLabel('fig', ['fig-bacteria', 'fig-virus']) => 'Figure 1,2'
  ```
*/
class NumberedLabelGenerator extends substance.EventEmitter {

  constructor(editorSession, exporter, refTypes) {
    super();
    this.editorSession = editorSession;
    this.document = editorSession.getDocument();
    // refTypes that should be considered e.g.
    this.refTypes = refTypes;
    // Holds positions for referenced items
    // e.g. { 'figxyz': 2 }
    this.positions = {};
    this._needsRecompute = {};

    // we use this to determine the order of referenced resources, such as figures
    this.content = editorSession.getDocument().find('article > body > body-content');

    // this is used to detect relevant updates as early as possible
    // before content has been deleted
    this.document.on('operation:applied', this._onOperation, this);
    this.editorSession.onUpdate('document', this._onDocumentChanged, this);
  }

  dispose() {
    this.editorSession.off(this);
  }

  /*
    Returns position for a given target

    @example

    ```js
    getPosition('bibr', 'bib25')
    ```
  */
  getPosition(refType, targetId) {
    return this._getPositions(refType)[targetId]
  }

  /*
    @example

    labelGenerator.getLabel('fig', 'fig1')
  */
  getLabel(refType, targetIds) {
    if (typeof targetIds === 'string') {
      targetIds = [ targetIds ];
    }
    // Compute target objects
    let targets = [];
    targetIds.forEach((targetId) => {
      targets.push({
        position: this.getPosition(refType, targetId)
      });
    });
    let result = this.refTypes[refType](targets);
    return result
  }

  /*
    Invalidating the computed positions on certain changes
    - if an ´<xref>´ is created or deleted
    - if the rid attribute of a ´<xref>´ is changed
    - if a ref-type content is inserted into the body

    TODO: this could still be improved. For example,
    for figures and such, `xrefs` do not matter for labelling.
  */
  _onOperation(op) {
    const doc = this.document;
    switch (op.type) {
      case CREATE:
      case DELETE: {
        const nodeData = op.val;
        if (nodeData.type === 'xref') {
          const refType = nodeData.attributes['ref-type'];
          if (refType) {
            this._needsRecompute[refType] = true;
          }
        }
        break
      }
      case UPDATE: {
        if (substance.isArrayEqual(op.path, this.content.getContentPath())) {
          let nodeId = op.diff.val;
          let node = doc.get(nodeId);
          const refType = REF_TYPES[node.type];
          if (refType) {
            this._needsRecompute[refType] = true;
          }
        }
        break
      }
      case SET: {
        if (op.path[1] === 'attributes' && op.path[2] === 'rid') {
          const nodeId = op.path[0];
          const node = doc.get(nodeId);
          if (node && node.type === 'xref') {
            const refType = node.getAttribute('ref-type');
            this._needsRecompute[refType] = true;
          }
        }
        break
      }
      default:
        //
    }
  }

  /*
    Determine based on document change whether the labels need to be
    recomputed or not.
  */
  _onDocumentChanged() {
    // recompute positions for all invalidated reftypes
    Object.keys(this._needsRecompute).forEach((refType) => {
      // console.log('Recomputing labels for refType %s', refType)
      this.positions[refType] = this._computePositions(refType);
      delete this._needsRecompute[refType];
      this.emit('labels:generated', refType);
    });
  }

  _computePositions(refType) {
    switch (refType) {
      case 'bibr':
      case 'fn': {
        return this._computePositionsOrderByRef(refType)
      }
      default:
        return this._computePositionsOrderByTarget(refType)
    }
  }

  _computePositionsOrderByRef(refType) {
    const positions = {};
    let counter = 1;
    const xrefs = this.document.findAll(`xref[ref-type="${refType}"]`);
    xrefs.forEach((xref) => {
      let targetIds = getXrefTargets(xref);
      targetIds.forEach((targetId) => {
        // if this targetId has been referenced the first time
        // here, we store the current counter as position
        if (!positions.hasOwnProperty(targetId)) {
          positions[targetId] = counter++;
        }
      });
    });
    return positions
  }

  _computePositionsOrderByTarget(refType) {
    const positions = {};
    const content = this.content;
    const selector = (XREF_TARGET_TYPES[refType] || []).join(',');
    const targets = content.findAll(selector);
    // TODO: there might be targets which should not be included
    // here
    // for now we take all of them
    for (let i = 0; i < targets.length; i++) {
      positions[targets[i].id] = i+1;
    }
    return positions
  }

  _getPositions(refType) {
    if (!this.positions[refType]) {
      this.positions[refType] = this._computePositions(refType);
    }
    return this.positions[refType]
  }

}

class AbstractWriter extends substance.AbstractEditor {

  constructor(...args) {
    super(...args);

    this.handleActions({
      'tocEntrySelected': this.tocEntrySelected
    });
  }

  _initialize(...args) {
    super._initialize(...args);

    let editorSession = this.getEditorSession();
    let doc = editorSession.getDocument();

    this.exporter = this._getExporter();
    this.tocProvider = this._getTOCProvider();
    this.saveHandler = this._getSaveHandler();
    this.contentHighlights = new substance.Highlights(doc);

    let sortNumeric = function(a, b){ return a-b };
    // NOTE: Supported ref-types are hard-coded for now
    this.labelGenerator = new NumberedLabelGenerator(editorSession, this.exporter, {
      'fn': function(targets) {
        let positions = targets.map(t => t.position).sort(sortNumeric);
        return positions.join(',') || '???'
      },
      'bibr': function(targets) {
        let positions = targets.map(t => t.position).sort(sortNumeric);
        return '[' + (positions.join(',') || '???') + ']'
      },
      'fig': function(targets) {
        let positions = targets.map(t => t.position).sort(sortNumeric);
        return 'Figure ' + (positions.join(',') || '???')
      },
      'table': function(targets) {
        let positions = targets.map(t => t.position).sort(sortNumeric);
        return 'Table ' + (positions.join(',') || '???')
      },
      // E.g. eLife videos are referenced as other
      'other': function(targets) {
        let positions = targets.map(t => t.position).sort(sortNumeric);
        return 'Other ' + (positions.join(',') || '???')
      }
    });
    editorSession.setSaveHandler(this.saveHandler);
  }

  didMount() {
    super.didMount();
    this.getEditorSession().onUpdate(this._onSessionUpdate, this);
  }

  dispose() {
    super.dispose();
    this.getEditorSession().off(this);
  }

  getChildContext() {
    let childContext = super.getChildContext.apply(this, arguments);
    childContext.tocProvider = this.tocProvider;
    childContext.labelGenerator = this.labelGenerator;
    return childContext
  }

  _renderToolbar($$) {
    let configurator = this.getConfigurator();
    return $$('div').addClass('se-toolbar-wrapper').append(
      $$(substance.Toolbar, {
        toolPanel: configurator.getToolPanel('toolbar')
      }).ref('toolbar')
    )
  }

  _renderContentPanel($$) { // eslint-disable-line
    throw new Error("This method is abstract.")
  }

  tocEntrySelected(nodeId) {
    return this._scrollTo(nodeId)
  }

  _scrollTo(nodeId) { // eslint-disable-line
    throw new Error("This method is abstract.")
  }

  _getExporter() {
    throw new Error("This method is abstract.")
  }

  _getTOCProvider() {
    throw new Error("This method is abstract.")
  }

  _getSaveHandler() {
    return new SaveHandler({
      documentId: this.props.documentId,
      xmlStore: this.context.xmlStore,
      exporter: this.exporter
    })
  }

  _onSessionUpdate(editorSession) {
    if (!editorSession.hasChanged('document') && !editorSession.hasChanged('selection')) return

    let sel = editorSession.getSelection();
    let selectionState = editorSession.getSelectionState();
    let xrefs = selectionState.getAnnotationsForType('xref');
    let highlights = {
      'fig': [],
      'bibr': []
    };
    if (xrefs.length === 1 && xrefs[0].getSelection().equals(sel) ) {
      let xref = xrefs[0];
      let targets = getXrefTargets(xref);
      highlights[xref.referenceType] = targets.concat([xref.id]);
    }
    this.contentHighlights.set(highlights);
  }
}

/*
  Index for Xrefs.

  @example
  Lets us look up existing xrefs by target

  To get all xrefs for a given target node (e.g. fn-1)

    var xIndex = doc.xrefIndex
    xIndex.get('fn-1')
*/
class XrefIndex extends substance.DocumentIndex {

  constructor() {
    super();
    this.byTarget = new substance.TreeIndex.Arrays();
  }

  select(node) {
    return node.type === 'xref'
  }

  clear() {
    this.byTarget.clear();
  }

  // TODO: use object interface? so we can combine filters (path and type)
  get(targetId) {
    return this.byTarget.get(targetId) || []
  }

  create(xref) {
    // const path = anno.start.path
    let targets = getXrefTargets(xref);
    targets.forEach((target) => {
      this.byTarget.add(target, xref.id);
    });
  }

  _delete(xrefId, targets) {
    targets.forEach((target) => {
      this.byTarget.remove(target, xrefId);
    });
  }

  delete(xref) {
    let targets = getXrefTargets(xref);
    this._delete(xref.id, targets);
  }

  update(node, path, newValue, oldValue) {
    if (path[2] === 'rid') {
      let targets = [];
      if (oldValue) {
        targets = oldValue.split(" ");
      }
      this._delete(node.id, targets);
      this.create(node);
    }
  }
}

class TextureEditing extends substance.Editing {

  // EXPERIMENTAL: run validation after pasting
  // and throw if there are errors
  // We need to find out which is the best way regarding schema
  // strictness
  // While it would be fantastic to be 100% strict all the time
  // it could also be a way to introduce an issue system
  // and instead failing badly, just make the user aware of these
  // issues
  // TODO: in general we would need to 'pre-process'
  paste(tx, content) {
    if (!content) return
    /* istanbul ignore else  */
    if (substance.isString(content)) {
      substance.paste(tx, {text: content});
    } else if (content._isDocument) {
      substance.paste(tx, {doc: content});
    } else {
      throw new Error('Illegal content for paste.')
    }

    let res = substance.validateXMLSchema(TextureJATS, tx.getDocument().toXML());
    if (!res.ok) {
      res.errors.forEach((err) => {
        console.error(err.msg, err.el);
      });
      throw new Error('Paste is violating the schema')
    }

  }

}

class TextureDocument extends substance.XMLDocument {

  _initialize() {
    super._initialize();
    // special index for xref lookup
    this.addIndex('xrefs', new XrefIndex());
  }

  getDocTypeParams() {
    return ['article', 'TextureJATS 1.1', 'http://texture.substance.io/TextureJATS-1.1.dtd']
  }

  getXMLSchema() {
    return TextureJATS
  }

  getRootNode() {
    return this.get('article')
  }

  getXRefs() {
    let articleEl = this.get('article');
    // this traverses the article in the same way as css-select
    return articleEl.findAll('xref')
  }

  createEditingInterface() {
    return new substance.XMLEditingInterface(this, { editing: new TextureEditing() })
  }

}

// These converters are used for the Clipboard
// Only basic formatting needs to be considered
var TextureHTMLConverters = [
  {
    type: 'p',
    tagName: 'p',
    import(el, node, converter) {
      node.content = converter.annotatedText(el, [node.id, 'content']);
    },
    export(node, el, converter) {
      el.append(converter.annotatedText([node.id, 'content']));
    }
  },
  {
    type: 'bold',
    tagName: 'b',
    matchElement(el) {
      return (el.is('b')) ||
        // To support non-semantic formatting, like GDocs does
        // ATTENTION: GDocs packs all formatting into one span using style attributes.
        // We only map to one node
        (el.is('span') && el.getStyle('font-weight') === '700')
    }
  },
  {
    type: 'italic',
    tagName: 'i',
    matchElement(el) {
      return (el.is('i')) ||
        (el.is('span') && el.getStyle('font-style') === 'italic')
    }
  },
  {
    type: 'underline',
    tagName: 'span',
    matchElement(el) {
      return el.getStyle('text-decoration') === 'underline'
    },
    export(node, el) {
      el.setStyle('text-decoration', 'underline');
    }
  },
  {
    type: 'strike',
    tagName: 'span',
    matchElement(el) {
      return el.getStyle('text-decoration') === 'line-through'
    },
    export(node, el) {
      el.setStyle('text-decoration', 'line-through');
    }
  },
  {
    type: 'sub',
    tagName: 'sub',
    matchElement(el) {
      return (el.is('sub')) || (el.is('span') && el.getStyle('vertical-align') === 'sub')
    }
  },
  {
    type: 'sup',
    tagName: 'sup',
    matchElement(el) {
      return (el.is('sup')) || (el.is('span') && el.getStyle('vertical-align') === 'super')
    },
    // export(node, el, converter) {
    //   el.tagName = 'span'
    //   el.setStyle('vertical-align', 'super')
    // }
  },
  {
    type: 'ext-link',
    tagName: 'a',
    import(el, node) {
      let href = el.getAttribute('href');
      if (href) {
        node.attributes = {
          'xlink:href': href
        };
      }
    },
    export(node, el) {
      el.setAttribute('href', node.attributes['xlink:href']);
    }
  }
];

class TextureJATSExporter extends substance.XMLExporter {

}

class TextureJATSImporter extends substance.DOMImporter {

  constructor(config, context) {
    super({
      idAttribute: 'id',
      schema: config.schema,
      // HACK: usually we use configurator.createImporter()
      converters: config.converters
    }, context);

    this.xmlSchema = TextureJATS;
  }

  importDocument(dom) {
    this.reset();
    const doc = this.state.doc;
    if (substance.isString(dom)) {
      dom = substance.DefaultDOMElement.parseXML(dom);
    }
    let articleEl = dom.find('article');
    if (!articleEl) throw new Error('Could not find <article> element.')
    doc.article = this.convertElement(articleEl);


    return this.state.doc
  }

  _initialize() {
    const schema = this.schema;
    const defaultTextType = schema.getDefaultTextType();
    const converters = this.converters;

    this._allConverters = [];
    this._propertyAnnotationConverters = [];
    this._blockConverters = [];

    for (let i = 0; i < converters.length; i++) {
      let converter;
      if (typeof converters[i] === 'function') {
        const Converter = converters[i];
        converter = new Converter();
      } else {
        converter = converters[i];
      }
      if (!converter.type) {
        throw new Error('Converter must provide the type of the associated node.')
      }
      if (!converter.matchElement && !converter.tagName) {
        throw new Error('Converter must provide a matchElement function or a tagName property.')
      }
      if (!converter.matchElement) {
        converter.matchElement = this._defaultElementMatcher.bind(converter);
      }
      const NodeClass = schema.getNodeClass(converter.type);
      if (!NodeClass) {
        throw new Error('No node type defined for converter')
      }
      if (!this._defaultBlockConverter && defaultTextType === converter.type) {
        this._defaultBlockConverter = converter;
      }

      // TODO: need to rethink this
      if (NodeClass.prototype._isAnnotation) {
        this._propertyAnnotationConverters.push(converter);
      } else {
        this._blockConverters.push(converter);
      }
    }
    if (!this._defaultBlockConverter) {
      throw new Error(`No converter for defaultTextType ${defaultTextType}`)
    }
    this._allConverters = this._blockConverters.concat(this._propertyAnnotationConverters);
  }

  _createNodeData(el, type) {
    let nodeData = super._createNodeData(el, type);
    let attributes = {};
    el.getAttributes().forEach((value, key) => {
      attributes[key] = value;
    });
    nodeData.attributes = attributes;
    return nodeData
  }

  getChildNodeIterator(el) {
    // TODO: this looks very hacky. Why do we need el plus it?
    let schema = this.xmlSchema.getElementSchema(el.tagName);
    let it = el.getChildNodeIterator();
    return new substance.ValidatingChildNodeIterator(el, it, schema.expr)
  }

  _getIdForElement(el, type) {
    if (type === 'article') {
      return 'article'
    } else {
      return super._getIdForElement(el, type)
    }
  }

  _convertPropertyAnnotation() {
    throw new Error('stand-alone annotations are not supported.')
  }

  _convertInlineNode(el, nodeData, converter) {
    const path = [];
    if (converter.import) {
      nodeData = converter.import(el, nodeData, this) || nodeData;
    }
    nodeData.start = { path, offset: 0 };
    nodeData.end = { offset: 0 };
    return nodeData
  }

}

var TextureJATSPackage = {
  name: 'TextureJATS',
  configure(config) {
    substance.registerSchema(config, TextureJATS, TextureDocument);
    config.addImporter(TextureJATS.getName(), TextureJATSImporter);
    // enable rich-text support for clipboard
    TextureHTMLConverters.forEach((converter) => {
      config.addConverter('html', converter);
    });
  }
};

function replaceWith(el, els) {
  const parent = el.parentNode;
  const next = el.nextSibling;
  els.forEach(_el => parent.insertBefore(_el, next));
  el.remove();
}

function unwrapChildren(el) {
  let parent = el.parentNode;
  let children = el.children;
  let L = children.length;
  for (let i = 0; i < L; i++) {
    parent.insertBefore(children[i], el);
  }
  parent.removeChild(el);
}

function findChild(el, cssSelector) {
  const children = el.getChildren();
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.is(cssSelector)) return child
  }
}

function isMixed(el) {
  let childNodes = el.childNodes;
  const L = childNodes.length;
  for (var i = 0; i < L; i++) {
    const childNode = childNodes[i];
    if (childNode.isTextNode() && !/^\s*$/.exec(childNode.textContent)) {
      return true
    }
  }
  return false
}

function printElement(el, options = {}) {
  let maxLevel = options.maxLevel || 1000;
  let res = _printElement(el, 1, maxLevel);
  return res
}

function _printElement(el, level, maxLevel) {
  let INDENT = new Array(level-1);
  INDENT.fill('  ');
  INDENT = INDENT.join('');

  if (el.isElementNode()) {
    if (level <= maxLevel) {
      let res = [];
      res.push(INDENT + _openTag(el));
      res = res.concat(
        el.childNodes.map((child) => {
          return _printElement(child, level+1, maxLevel)
        }).filter(Boolean)
      );
      res.push(INDENT + _closeTag(el));
      return res.join('\n')
    } else {
      return INDENT + _openTag(el)+'...'+_closeTag(el)
    }
  } else if (el.isTextNode()) {
    let textContent = el.textContent;
    if (/^\s*$/.exec(textContent)) {
      return ''
    } else {
      return INDENT + JSON.stringify(el.textContent)
    }
  } else {
    // TODO: render other node types and consider maxLevel
    return INDENT + el.serialize()
  }
}

function _openTag(el) {
  let attribStr = substance.DomUtils.formatAttribs(el);
  if (attribStr) {
    return `<${el.tagName} ${attribStr}>`
  } else {
    return `<${el.tagName}>`
  }
}

function _closeTag(el) {
  return `</${el.tagName}>`
}

class JATSImportDialog extends substance.Component {

  render($$) {
    const errors = this.props.errors;
    let el = $$('div').addClass('sc-jats-import-dialog');
    el.append($$('h1').addClass('se-title').text('Importing JATS'));

    Object.keys(errors).forEach((stageName) => {
      el.append($$(ImportStage, {
        stage: stageName,
        errors: errors[stageName]
      }));
    });

    return el
  }

}

class ImportStage extends substance.Component {

  render($$) {
    const errors = this.props.errors;
    let el = $$('div').addClass('sc-import-stage');
    el.append($$('h2').addClass('se-title').text(_getTitle(this.props.stage)));

    if (this.props.errors.length > 0) {
      let errorsEl = $$('div').addClass('se-errors');
      errors.forEach((err) => {
        errorsEl.append(this._renderError($$, err));
      });
      el.append(errorsEl);
    }
    return el
  }

  _renderError($$, err) {
    let el = $$('div').addClass('se-error');
    // TODO: maybe we will have more structured errors
    el.append(
      $$('div').addClass('se-message').text(err.msg)
    );
    if (err.el) {
      el.append(
        $$('pre').addClass('se-element').text(printElement(err.el, { maxLevel: 1}))
      );
    }
    return el
  }
}

const TITLES = {
  'parse': 'Parse XML',
  'validate-jats': 'Validate JATS',
  'validate-jats4r': 'Validate JATS4R',
  'validate-texture-jats': 'Validate TextureJATS',
  'j2r': 'Transform JATS -> JATS4R',
  'r2t': 'Transform JATS4R -> TextureJATS'
};

function _getTitle(stage) {
  return TITLES[stage]
}

class WrapAff {

  import(dom) {
    let articleMeta = dom.find('article-meta');
    let allAffs = dom.findAll('article-meta > aff');
    // TODO: if we had article-meta as interleave
    // we could be less careful with inserting the <aff-group>
    if (allAffs.length > 0) {
      let affGroup = dom.createElement('aff-group');
      articleMeta.insertBefore(affGroup, allAffs[0]);
      affGroup.append(allAffs);
    }
  }

  export(dom) {
    let affGroup = dom.find('aff-group');
    if (affGroup) {
      unwrapChildren(affGroup);
    }
  }
}

const ABSTRACT_META = ['object-id','sec-meta', 'label', 'title'].reduce((m, n) => { m[n] = true; return m}, {});
const ABSTRACT_BACK = ['notes','fn-group','glossary','ref-list'].reduce((m, n) => { m[n] = true; return m}, {});

class WrapAbstractContent {

  import(dom) {
    let abstracts = dom.findAll('abstract').concat(dom.findAll('trans-abstract'));
    abstracts.forEach( (abstract) => {
      // restructure child nodes
      const meta = [];
      const content = [];
      const back = [];
      abstract.children.forEach((child) => {
        const tagName = child.tagName;
        if (ABSTRACT_META[tagName]) {
          meta.push(child);
        } else if (ABSTRACT_BACK[tagName]) {
          back.push(child);
        } else {
          content.push(child);
        }
      });
      abstract.empty();
      abstract.append(meta);
      abstract.append(dom.createElement('abstract-content').append(content));
      abstract.append(back);
    });
  }

  export(dom) {
    let abstractContentEls = dom.findAll('abstract-content');
    abstractContentEls.forEach((abstractContent) => {
      // pull children of abstract-content up one layer
      unwrapChildren(abstractContent);
    });
  }
}

class WrapBodyContent {

  import(dom) {
    let bodies = dom.findAll('body');
    bodies.forEach((body) => {
      const sigBlock = body.find('sig-block');
      const children = body.children;
      body.empty();
      body.append(
        dom.createElement('body-content').append(children)
      );
      if (sigBlock) {
        body.append(sigBlock);
      }
    });
  }

  export(dom) {
    let contentEls = dom.findAll('body-content');
    contentEls.forEach(unwrapChildren);
  }
}

class WrapDispQuoteContent {

  import(dom) {
    dom.findAll('disp-quote').forEach((dispQuote) => {
      let attribs = dispQuote.findAll('attrib');
      let content = dom.createElement('disp-quote-content').append(dispQuote.children);
      dispQuote.append(content);
      dispQuote.append(attribs);
    });
  }

  export(dom) {
    dom.findAll('disp-quote-content').forEach(unwrapChildren);
  }
}

class Sec2Heading {

  import(dom) {
    // find all top-level sections
    let topLevelSecs = dom.findAll('sec').filter(sec => sec.parentNode.tagName !== 'sec');
    topLevelSecs.forEach((sec) => {
      replaceWith(sec, _flattenSec(sec, 1));
    });
  }

  export(dom) {
    let allHeadings = dom.findAll('heading');
    let containers = [];
    allHeadings.forEach((heading)=> {
      let container = heading.parentNode;
      if (!container._sec2heading) {
        containers.push(container);
        container._sec2heading = true;
      }
    });
    containers.forEach((container) => {
      _createSections(container);
    });
  }

}

function _flattenSec(sec, level) {
  let result = [];

  let h = sec.createElement('heading');
  h.attr(sec.getAttributes());
  h.attr('level', level);

  // move the section front matter
  if(sec.find('sec-meta')) {
    console.error('<sec-meta> is not supported by <heading> right now.');
  }
  let label = sec.find('label');
  if (label) {
    h.attr('label', label.textContent);
    label.remove();
  }
  let title = sec.find('title');
  if (title) {
    h.append(title.childNodes);
    title.remove();
  }

  result.push(h);

  // process the remaining content recursively
  let children = sec.children;
  let L = children.length;
  for (let i = 0; i < L; i++) {
    const child = children[i];
    if (child.tagName === 'sec') {
      result = result.concat(_flattenSec(child, level+1));
    } else {
      result.push(child);
    }
  }

  return result
}

function _createSections(container) {
  const doc = container.getOwnerDocument();
  const children = container.children;
  // clear the container first
  container.empty();
  let stack = [{
    el: container
  }];
  for (let i=0; i < children.length; i++) {
    let child = children[i];
    if (child.tagName === 'heading') {
      let level = child.attr('level') || 1;
      while (stack.length >= level+1) {
        stack.pop();
      }
      // TODO: transfer attributes
      let sec = doc.createElement('sec');
      let attributes = child.getAttributes();
      delete attributes['level'];
      sec.attr(attributes);
      substance.last(stack).el.appendChild(sec);
      stack.push({
        el: sec
      });
    } else {
      substance.last(stack).el.appendChild(child);
    }
  }
}

/*
  In Texture we decided to pull the title out of the caption
  as this more general.
*/
class ExtractCaptionTitle {

  import(dom) {
    dom.findAll('caption').forEach(_extractCaptionTitle);
  }

  export(dom) {
    dom.findAll('caption').forEach(_wrapCaptionTitle);
  }

}

function _extractCaptionTitle(caption) {
  let parentNode = caption.parentNode;
  let titleEl = findChild(caption, 'title');
  if (titleEl) {
    let schema = TextureJATS.getElementSchema(parentNode.tagName);
    let pos = schema.findLastValidPos(parentNode, 'title');
    parentNode.insertAt(pos, titleEl);
  }
}

function _wrapCaptionTitle(caption) {
  let parentNode = caption.parentNode;
  let titleEl = findChild(parentNode, 'title');
  if (titleEl) {
    caption.insertAt(0, titleEl);
  }
}

class UpdateDocType {

  import(dom) {
    dom.setDocType(
      ...TextureJATS.getDocTypeParams()
    );
  }

  export(dom) {
    dom.setDocType(
      ...JATS4R.getDocTypeParams()
    );
  }
}

class TransformAff {

  import(dom) {
    let allAffs = dom.findAll('aff');
    allAffs.forEach((aff) => {
      _importAff(aff);
    });
  }

  export(dom) {
    let allAffs = dom.findAll('aff');
    allAffs.forEach((aff) => {
      _exportAff(aff);
    });
  }
}

function _importAff(aff) {
  const doc = aff.getOwnerDocument();
  let x = aff.find('x[specific-use=display]');
  let stringAff = doc.createElement('string-aff');
  let elementAff = doc.createElement('element-aff');
  if (x) {
    stringAff.append(x.childNodes);
    aff.removeChild(x);
  }
  elementAff.append(aff.children);
  aff.append(stringAff, elementAff);
}

function _exportAff(aff) {
  const doc = aff.getOwnerDocument();
  let stringAff = aff.find('string-aff');
  let elementAff = aff.find('element-aff');
  aff.empty();
  if (stringAff) {
    let x = doc.createElement('x').attr('specific-use', 'display');
    x.append(stringAff.childNodes);
    aff.append(x);
  }
  if (elementAff) {
    aff.append(elementAff.children);
  }
}

class TransformContrib {

  import(dom) {
    let allContribs = dom.findAll('contrib');
    allContribs.forEach((contrib) => {
      _importContrib(contrib);
    });
  }

  export(dom) {
    let allContribs = dom.findAll('contrib');
    allContribs.forEach((contrib) => {
      _exportContrib(contrib);
    });
  }
}

function _importContrib(contrib) {
  const doc = contrib.getOwnerDocument();
  let x = contrib.find('x[specific-use=display]');
  let stringContrib = doc.createElement('string-contrib');
  let elementContrib = doc.createElement('element-contrib');
  if (x) {
    stringContrib.append(x.childNodes);
    contrib.removeChild(x);
  } else {
    // TODO: a proper renderer would be nice here
    let name = contrib.find('name');
    if (name) {
      let givenNames = name.find('given-names');
      let surname = name.find('surname');
      if (givenNames && surname) {
        stringContrib.textContent = givenNames.textContent + " " + surname.textContent;
      } else {
        stringContrib.textContent = name.textContent;
      }
    } else {
      stringContrib.textContent = contrib.textContent;
    }
  }
  elementContrib.append(contrib.children);
  contrib.append(stringContrib, elementContrib);
}

function _exportContrib(contrib) {
  const doc = contrib.getOwnerDocument();
  let stringContrib = contrib.find('string-contrib');
  let elementContrib = contrib.find('element-contrib');
  contrib.empty();
  if (stringContrib) {
    let x = doc.createElement('x').attr('specific-use', 'display');
    x.append(stringContrib.childNodes);
    contrib.append(x);
  }
  if (elementContrib) {
    contrib.append(elementContrib.children);
  }
}

class ConvertContentLoc {

  /*
    Collect <fpage>,<lpage>, <page-range>, or <elocation-id> from
    <article-meta>, and wrap them into <publication-loc>
  */
  import(dom) {
    let articleMeta = dom.find('front > article-meta');

    let tagNames = ['fpage', 'lpage', 'page-range', 'elocation-id'];
    let els = {};
    tagNames.forEach((tagName) => {
      els[tagName] = articleMeta.find(tagName);
    });
    let type = els.elocationId ? 'electronic' : 'print';
    let contentLoc = dom.createElement('content-loc').attr('type', type);
    substance.forEach(els, (el, tagName) => {
      if (el) {
        contentLoc.append(el);
      } else {
        contentLoc.append(dom.createElement(tagName).append(""));
      }
    });
    // TODO: it would be better to have an interleave model,
    // i.e. without order, and instead reorder it correctly during export
    let schema = TextureJATS.getElementSchema('article-meta');
    let pos = schema.findFirstValidPos(articleMeta, 'content-loc');
    articleMeta.insertAt(pos, contentLoc);
  }

  export(dom) {
    let contentLoc = dom.find('article-meta > content-loc');
    if (contentLoc) {
      let locEls = [];
      let type = contentLoc.attr('type');
      if (type === 'electronic') {
        locEls.push(contentLoc.find('elocation-id'));
      } else {
        let fpage = contentLoc.find('fpage');
        let lpage = contentLoc.find('lpage');
        let pageRange = contentLoc.find('page-range');
        if (fpage.textContent) {
          locEls.push(fpage);
          if (lpage.textContent) {
            locEls.push(lpage);
          }
        }
        if (pageRange.textContent) {
          locEls.push(pageRange);
        }
      }
      replaceWith(contentLoc, locEls);
    }
  }
}

// in JATS4R we propose sig-block := sig+
// ATM, we are not good in editing a container like element
// that uses something else than paragraphs
// TODO: we should allow to customize the Editing behavior just for
// this element type.
// Alternatively, we could treat sig as TextProperty and somehow
// override the break behavior and insert a <break> instead
class ConvertSigBlock {

  import(dom) {
    dom.findAll('sig-block > sig').forEach(_importSig);
  }

  export(dom) {
    dom.findAll('sig-block > sig').forEach(_exportSig);
  }
}

function _importSig(sig) {
  let dom = sig.getOwnerDocument();
  let nodes = [];
  let blocks = [];

  function _createParagraph() {
    if (nodes.length > 0) {
      let p = dom.createElement('p').append(nodes);
      blocks.push(p);
      nodes = [];
    }
  }

  sig.childNodes.forEach((c) => {
    if (c.tagName === 'break') {
      _createParagraph();
    } else {
      nodes.push(c);
    }
  });
  _createParagraph();

  sig.empty();
  sig.append(blocks);
}

function _exportSig(sig) {
  let dom = sig.getOwnerDocument();

  let content = [];
  // now take all the <p>s the sig and separate them with <break>
  let children = sig.children;
  if (children.length > 0) {
    content = content.concat(children[0].childNodes);
    for (let i = 1; i < children.length; i++) {
      content.push(dom.createElement('break'));
      content = content.concat(children[i].childNodes);
    }
  }
  sig.empty();
  sig.append(content);
}

/*
  For sake of simplicity we want to use only <history>
  for all dates describing the life-cycle of a publication
*/
class UnifyPublicationHistory {

  /*
    Take all <pub-dates> and move them into <history>
  */
  import(dom) {
    let articleMeta = dom.find('article-meta');
    let pubDates = dom.findAll('article-meta > pub-date');
    let history = dom.find('article-meta > history');
    if (!history) {
      history = dom.createElement('history');
      let pos = JATS4R.getElementSchema('article-meta').findFirstValidPos(articleMeta, 'history');
      articleMeta.insertAt(pos, history);
    }
    pubDates.forEach((pubDate) => {
      pubDate.tagName = 'date';
      pubDate.attr('date-type', 'pub');
      history.append(pubDate);
    });
  }

  export(dom) {
    // convert all date-type='pub' into <pub-date>s
    let articleMeta = dom.find('article-meta');
    let history = dom.find('article-meta > history');
    let dates = history.findAll('date');
    let schema = JATS4R.getElementSchema('article-meta');
    let pos = schema.findFirstValidPos(articleMeta, 'pub-date');
    for (let i = dates.length - 1; i >= 0; i--) {
      let date = dates[i];
      let type = date.attr('date-type');
      if (type === 'pub') {
        date.tagName = 'pub-date';
        articleMeta.insertAt(pos, date);
      } else {
        // make sure we discard @pub-type on the others
        date.removeAttribute('pub-type');
      }
    }
  }

}

class NormalizeHistoryDates {

  import(dom) {
    dom.findAll('article-meta > history > date').forEach(_importDate);
  }

  export(dom) {
    dom.findAll('article-meta > history > date').forEach(_exportDate);
  }

}

function _importDate(date) {
  let dom = date.getOwnerDocument();
  // classify the date by inspecting the content
  let season = date.find('season');
  let stringDate = date.find('string-date');
  let dateFormat = 'standard';
  if (season) {
    dateFormat = 'seasonal';
  } else if (stringDate) {
    dateFormat = 'custom';
  }
  date.attr('format', dateFormat);
  // in TextureJATS we use a super-record, capable of containing all
  // variants
  let els = ['day', 'month', 'season', 'year', 'era', 'string-date'].map((name) => {
    return findChild(date, name) || dom.createElement(name).append("")
  });
  date.empty();
  date.append(els);
}

function _exportDate(date) {
  let children = date.getChildren();
  let dateFormat = date.attr('format');
  date.empty();
  date.removeAttribute('format');
  switch (dateFormat) {
    case 'seasonal': {
      date.append(_pickButPruneEmptyOptionals(children, {
        'season': 'required',
        'year': 'required',
        'era': 'optional'
      }));
      break
    }
    case 'custom': {
      date.append(_pickButPruneEmptyOptionals(children, {
        'string-date': 'required'
      }));
      break
    }
    // 'standard'
    default:
      date.append(_pickButPruneEmptyOptionals(children, {
        'day': 'optional',
        'month': 'optional',
        'year': 'required',
        'era': 'optional'
      }));
  }
}

// TODO: this seems to be a useful helper
// but we need a better name
function _pickButPruneEmptyOptionals(els, specs) {
  return els.filter((el) => {
    let spec = specs[el.tagName];
    return (spec && (spec !== 'optional' || el.textContent))
  })
}

class PruneEmptyElements {

  import() {
    // nothing to do here
  }

  export(dom) {
    let emptyEls = dom.findAll('break');
    emptyEls.forEach(el => {
      el.empty();
    });
  }
}

// import PruneText from './PruneText'
// ATTENTION: the order of converters is critical,
// as some of them need to do insert nodes in a way
// that adheres to the schema
// ATM
const trafos = [
  PruneEmptyElements,
  UnifyPublicationHistory,
  NormalizeHistoryDates,
  ConvertSigBlock,
  ExtractCaptionTitle,
  WrapAff,
  TransformAff,
  TransformContrib,
  WrapAbstractContent,
  WrapBodyContent,
  WrapDispQuoteContent,
  Sec2Heading,
  ConvertContentLoc,
  UpdateDocType,
  // TODO: is this really necessary again?
  // PruneText,
].map(C => new C());

function r2t(dom, api) {
  for (let i = 0; i < trafos.length; i++) {
    trafos[i].import(dom, api);
  }
}

// NOTE: exporters are called in inverse order
function t2r(dom, api) {
  for (let i = trafos.length - 1; i >= 0; i--) {
    trafos[i].export(dom, api);
  }
}

const PRESERVE_WHITESPACE = {
  'preformat': true,
  'code': true
};

function pruneText(el, xmlSchema) {
  if (el.isElementNode()) {
    let schema = xmlSchema.getElementSchema(el.tagName);
    if (!schema.isTextAllowed()) {
      _pruneText(el, xmlSchema);
    } else if (schema.type === 'text' && !PRESERVE_WHITESPACE[el.tagName]) {
      _pruneWhiteSpace(el, xmlSchema);
    }
  }
}

function _pruneText(el, xmlSchema) {
  let childNodes = el.childNodes;
  for (let i = childNodes.length - 1; i >= 0; i--) {
    let child = childNodes[i];
    if (child.isTextNode()) {
      el.removeChild(child);
    } else if (child.isElementNode()) {
      pruneText(child, xmlSchema);
    }
  }
}

function _pruneWhiteSpace(el, xmlSchema) {
  // TODO:
  // - remove all leading ws
  // - replace all inner ws with one space
  // - remove all trailing ws
  let childNodes = el.childNodes;
  if (childNodes.length === 0) return
  let firstChild = childNodes[0];
  let lastChild = substance.last(childNodes);
  // trim leading ws
  if (firstChild.isTextNode()) {
    let text = firstChild.textContent;
    text = text.replace(/^\s+/g, '');
    firstChild.textContent = text;
  }
  // trim trailing ws
  if (lastChild.isTextNode()) {
    let text = lastChild.textContent;
    text = text.replace(/\s+$/g, '');
    lastChild.textContent = text;
  }
  for (let i = 0; i < childNodes.length; i++) {
    let child = childNodes[i];
    if (child.isTextNode()) {
      let text = child.textContent;
      let m;
      while ( (m = /\s\s+/g.exec(text)) ) {
        const L = m[0].length;
        text = text.slice(0, m.index) + ' ' + text.slice(m.index+L);
      }
      child.textContent = text;
    } else if (child.isElementNode()) {
      let schema = xmlSchema.getElementSchema(child.tagName);
      if (schema.type === 'annotation') {
        _pruneWhiteSpace(child, xmlSchema);
      }
    }
  }

}

/*
  Removes all native TextNodes from elements which we specified to be
  not-mixed.
*/
class PruneText {

  import(dom) {
    pruneText(dom.find('article'), JATS4R);
  }

  export() {
    // nothing
  }
}

/*
  In our restriction all <aff> elements must be defined
  in <article-meta>. At all other places an <xref> must be
  used instead.

  This transformation pulls all affs into one place
  and inserts an <xref> where necessary.
*/
class CollectAffs {

  import(dom) {
    let articleMeta = dom.find('article-meta');
    let allAffs = dom.findAll('aff');
    let articleMetaSchema = JATSArchiving.getElementSchema('article-meta');
    let pos = articleMetaSchema.findLastValidPos(articleMeta, 'aff');
    allAffs.forEach((aff) => {
      if (_needReplace(aff)) {
        _replaceAffWithXref(aff);
        articleMeta.insertAt(pos++, aff);
      }
    });
  }

}

const AFF_PARENTS = ['article-meta', 'aff-alternatives'];

function _needReplace(aff) {
  let parentTagname = aff.parentNode.tagName;
  return AFF_PARENTS.indexOf(parentTagname) < 0
}

function _replaceAffWithXref(aff) {
  const doc = aff.getOwnerDocument();
  let affId = aff.attr('id');
  if (!affId) {
    affId = substance.uuid();
    aff.attr('id', affId);
  }
  let xref = doc.createElement('xref');
  xref.attr({
    'ref-type': 'aff',
    'rid': affId
  });
  aff.parentNode.replaceChild(aff, xref);
}

/*
  This pulls block-elements such as `<fig>` which are
  wrapped in a `<p>` one level up.
  In the opposite direction only those elements are wrapped
  which would otherwise violate JATS
*/
class UnwrapBlockLevelElements {

  import(dom) {
    dom.findAll('p').forEach(_pBlock);
  }

  export() {
    console.error('TODO: implement UnwrapBlockLevelElements.export()');
  }

}

// TODO: add all of them
const BLOCKS = ['fig', 'fig-group', 'media', 'list', 'disp-formula', 'disp-quote'];
const isBlock = BLOCKS.reduce((m, n) => { m[n] = true; return m}, {});

function _pBlock(p) {
  let parent = p.parentNode;
  let children = p.children;
  let L = children.length;
  // doing it reverse so that we don't miss elements due to the ongoing tranformations
  for (var i = L - 1; i >= 0; i--) {
    let child = children[i];
    if (isBlock[child.tagName]) {
      // create a new <p>
      let newP = parent.createElement('p');
      let childPos = p.getChildIndex(child);
      let siblings = p.childNodes.slice(childPos+1);
      // move all subsequent siblings to the new <p>
      // and insert the block element and the new one after the current <p>
      let pos = parent.getChildIndex(p)+1;
      parent.insertAt(pos, child);
      if (siblings.length > 0 && _needsP(siblings)) {
        newP.append(siblings);
        parent.insertAt(pos+1, newP);
      }
    }
  }
  // if the original <p> is now empty, remove it
  if (!_needsP(p.childNodes)) {
    p.parentNode.removeChild(p);
  }
}

function _needsP(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    let child = nodes[i];
    // don't prune if there is something else left
    if (!child.isTextNode() || !(/^\s*$/.exec(child.textContent)) ) return true
  }
  return false
}

class WrapSig {

  import(dom, api) {
    dom.findAll('sig-block').forEach((sigBlock) => {
      _importSigBlock(sigBlock, api);
    });
  }

  export() {
    // nothing
  }

}

function _importSigBlock(sigBlock, api) {
  let dom = sigBlock.getOwnerDocument();
  let sig = sigBlock.find('sig');

  if (isMixed(sigBlock)) {
    if (sig) {
      api.error({
        msg: 'Found <sig-block> containing <sig> elements but also text. Please wrap all content in <sig>.'
      });
    } else {
      let sig = dom.createElement('sig');
      sig.append(sigBlock.childNodes);
      sigBlock.append(sig);
    }
  }
}

// import HomogenizeSigBlocks from './HomogenizeSigBlocks'
const trafos$1 = [
  // HomogenizeSigBlocks,
  WrapSig,
  UnwrapBlockLevelElements,
  PruneText,
  // ATTENTION: all converters which require schema sensitive insertion
  // need to go after PruneText, as otherwise the our validator
  // considers all TextNodes as a violation
  CollectAffs,
].map(C => new C());

function j2r(dom, api) {
  for (let i = 0; i < trafos$1.length; i++) {
    trafos$1[i].import(dom, api);
  }
}

class Transform {

  import(dom, converter) {
    let allAffs = dom.findAll('aff');
    allAffs.forEach((aff) => {
      _importAff$1(aff, converter);
    });
  }

  export() {
    // nothing
  }
}

function _importAff$1(aff) {
  // if we find mixed content then we create an <x specific-use="display">
  if (isMixed(aff)) {
    const doc = aff.getOwnerDocument();
    let display = doc.createElement('x').attr('specific-use', 'display');
    display.append(aff.textContent);
    aff.insertAt(0, display);
  }
}

class ScieloAffConverter {

  import(dom, converter) {
    let allAffs = dom.findAll('aff');
    allAffs.forEach((aff) => {
      _importAff$2(aff, converter);
    });
  }

  export(dom) {
    let affs = dom.findAll('aff');
    affs.forEach((aff) => {
      _exportAff$1(aff);
    });
  }
}

/*
  SciELO uses institution[content-type="original"] to retain
  a textual representation.
*/
function _importAff$2(aff) {
  const doc = aff.getOwnerDocument();['original', 'normalized'].forEach((type) => {
    let el = aff.find(`institution[content-type=${type}]`);
    if (el) {
      aff.removeChild(el);
      let display = doc.createElement('x').attr('specific-use', type);
      display.append(el.childNodes);
      aff.insertAt(0, display);
    }
  });
}

function _exportAff$1(aff) {
  const doc = aff.getOwnerDocument();
  let original = aff.find(`x[specific-use=original]`);
  if (original) {
    original.removeAttr('specific-use').setTagName('institution').attr('content-type', 'original');
  }
  let normalized = aff.find(`x[specific-use=normalized]`);
  if (normalized) {
    // TODO: we should generate these, as they should be derived
    // from the structured data
    aff.removeChild(normalized);
    let el = doc.createElement('institution').attr('content-type', 'normalized');
    el.textContent = _normalizedInstitution(aff);
    aff.insertAt(0, el);
  }
  // let display = aff.find(`x[specific-use=normalized]`)
}

function _normalizedInstitution(/*aff*/) {
  return '_normalizedInstitution not implemented'
}

/*
  Some destructive conversions, we need right now, as
  we do not have a better model.
*/

class Hackz {

  import(dom) {
    _forcePlainText(dom);
    _noEmailInP(dom);
  }

  export() {
    // nothing
  }

}

const forcePlainText = ['corresp', 'funding-source'];

function _forcePlainText(dom) {
  dom.findAll(forcePlainText.join(', ')).forEach(_makePlainText);
}

function _makePlainText(el) {
  let text = el.textContent;
  el.empty();
  el.textContent = text;
}

function _noEmailInP(dom) {
  let emailsInP = dom.findAll('p > email');
  emailsInP.forEach((email) => {
    email.tagName = 'ext-link';
  });
}

const trafos$2 = [
  Transform,
  ScieloAffConverter,
  Hackz
].map(C => new C());

const CUSTOM = {
  import(dom, api) {
    for (let i = 0; i < trafos$2.length; i++) {
      trafos$2[i].import(dom, api);
    }
  },
  export(dom, api) {
    for (let i = 0; i < trafos$2.length; i++) {
      trafos$2[i].export(dom, api);
    }
  }
};

/*
  Goal:
  - make it very transparent, what exactly gets transformed
  - show what goes wrong

*/
class JATSImporter extends substance.EventEmitter {

  import(xml) {
    let dom;

    this.errors = {
      'parse': [],
      'validate-jats': [],
      'custom': [],
      'j2r': [],
      'validate-jats4r': [],
      'r2t': [],
      'validate-texture-jats': [],
    };

    if (substance.isString(xml)) {
      try {
        dom = substance.DefaultDOMElement.parseXML(xml);
      } catch(err) {
        this._error('parse', {
          msg: String(err)
        });
        return
      }
    } else if (xml._isDOMElement) {
      dom = xml;
    }

    if (!this._validate(JATSArchiving, dom)) return dom

    // Custom transformations
    if (!this._transform('custom', dom)) return dom

    // JATS -> restricted JATS
    if (!this._transform('j2r', dom)) return dom

    if (!this._validate(JATS4R, dom)) return dom

    // restrictedJATS -> TextureJATS
    if (!this._transform('r2t',dom)) return dom

    if (!this._validate(TextureJATS, dom)) return dom

    return dom
  }

  hasErrored() {
    return this._hasErrored
  }

  _validate(schema, dom) {
    const name = schema.getName();
    const channel = `validate-${name}`;
    let res = substance.validateXMLSchema(schema, dom);
    if (!res.ok) {
      res.errors.forEach((err) => {
        this._error(channel, err);
      });
      return false
    }
    return true
  }

  _transform(mode, dom) {
    const api = this._createAPI(dom, mode);
    switch (mode) {
      case 'j2r':
        j2r(dom, api);
        break
      case 'r2t':
        r2t(dom, api);
        break
      case 'custom':
        CUSTOM.import(dom, api);
        break
      default:
        //
    }
    return true
  }

  _createAPI(dom, channel) {
    const self = this;
    let api = {
      error(data) {
        self._error(channel, data);
      }
    };
    return api
  }

  _error(channel, err) {
    this._hasErrored = true;
    this.errors[channel].push(err);
  }

}

class JATSExporter {
  /*
    Takes a TextureJATS document as a DOM and transforms it into a JATS document,
    following JATS4R guidelines.
  */
  export(dom) {
    const api = this._createAPI(dom);
    t2r(dom, api);

    let res = substance.validateXMLSchema(JATS4R, dom);
    if (!res.ok) {
      res.errors.forEach((err) => {
        console.error(err.msg, err.el);
      });
    }

    return dom
  }

  hasErrored() {
    return this._hasErrored
  }

  _createAPI() {
    const self = this;
    let api = {
      error(data) {
        self._error(data);
      }
    };
    return api
  }

  _error(err) {
    this._hasErrored = true;
    this.errors.push(err);
  }

}

/*
  Manages a table of content for a container. Default implementation considers
  all headings as TOC entries. You can extend this implementation and override
  `computeEntries`. Instantiate this class on controller level and pass it to relevant components
  (such as {@link ui/TOCPanel} and {@link ui/ScrollPane}).

  @class TOCProvider
  @component

  @prop {Controller}
 */

class TOCProvider extends substance.EventEmitter {
  constructor(document, config) {
    super(document, config);
    this.document = document;
    this.config = config;

    this.entries = this.computeEntries();
    if (this.entries.length > 0) {
      this.activeEntry = this.entries[0].id;
    } else {
      this.activeEntry = null;
    }

    this.document.on('document:changed', this.handleDocumentChange, this);
  }

  dispose() {
    let doc = this.getDocument();
    doc.disconnect(this);
  }

  // Inspects a document change and recomputes the
  // entries if necessary
  handleDocumentChange(change) {
    let doc = this.getDocument();
    let needsUpdate = false;
    let tocTypes = this.constructor.tocTypes;

    // HACK: this is not totally correct but works.
    // Actually, the TOC should be updated if tocType nodes
    // get inserted or removed from the container, plus any property changes
    // This implementation just checks for changes of the node type
    // not the container, but as we usually create and show in
    // a single transaction this works.
    for (let i = 0; i < change.ops.length; i++) {
      let op = change.ops[i];
      let nodeType;
      if (op.isCreate() || op.isDelete()) {
        let nodeData = op.getValue();
        nodeType = nodeData.type;
        if (substance.includes(tocTypes, nodeType)) {
          needsUpdate = true;
          break
        }
      } else {
        let id = op.path[0];
        let node = doc.get(id);
        if (node && substance.includes(tocTypes, node.type)) {
          needsUpdate = true;
          break
        }
      }
    }
    if (needsUpdate) {
      this.entries = this.computeEntries();
      this.emit('toc:updated');
    }
  }

  computeEntries() {
    let doc = this.getDocument();
    let config = this.config;
    let entries = [];
    let contentNodes = doc.get(config.containerId).getChildren();
    substance.forEach(contentNodes, function(node) {
      if (node.type === 'heading') {
        entries.push({
          id: node.id,
          name: node.content,
          level: parseInt(node.level, 10),
          node: node
        });
      }
    });
    return entries
  }

  getEntries() {
    return this.entries
  }

  getDocument() {
    return this.document
  }

  markActiveEntry(scrollPane) {
    let panelContent = scrollPane.getContentElement();
    let contentHeight = scrollPane.getContentHeight();
    let scrollPaneHeight = scrollPane.getHeight();
    let scrollPos = scrollPane.getScrollPosition();

    let scrollBottom = scrollPos + scrollPaneHeight;
    let regularScanline = scrollPos;
    let smartScanline = 2 * scrollBottom - contentHeight;
    let scanline = Math.max(regularScanline, smartScanline);

    let tocNodes = this.computeEntries();
    if (tocNodes.length === 0) return

    // Use first toc node as default
    let activeEntry = tocNodes[0].id;
    for (let i = tocNodes.length - 1; i >= 0; i--) {
      let tocNode = tocNodes[i];
      let nodeEl = panelContent.find('[data-id="'+tocNode.id+'"]');
      if (!nodeEl) {
        console.warn('Not found in Content panel', tocNode.id);
        return
      }
      let panelOffset = scrollPane.getPanelOffsetForElement(nodeEl);
      if (scanline >= panelOffset) {
        activeEntry = tocNode.id;
        break
      }
    }

    if (this.activeEntry !== activeEntry) {
      this.activeEntry = activeEntry;
      this.emit('toc:updated');
    }
  }
}

TOCProvider.tocTypes = ['heading'];

class Navigator extends substance.Component {

  getInitialState() {
    return {
      expanded: false
    }
  }

  render($$) {
    let el = $$('div').addClass('sc-navigator');
    const panelsSpec = this.props.panelsSpec;
    let label = this.context.labelProvider.getLabel(this.props.contextId);
    el.append(
      $$('div').addClass('se-toggle').append(
        $$('div').addClass('se-label').append(
          label
        ),
        $$('div').addClass('se-expanded').append(
          $$(substance.FontAwesomeIcon, { icon: 'fa-angle-down' })
        )
      ).on('click', this._toggle)
    );

    if (this.state.expanded) {
      let menuEl = $$('div').addClass('se-menu');
      panelsSpec.forEach((entry) => {
        if (entry.panel) {
          let label = this.context.labelProvider.getLabel(entry.panel);
          let isActive = entry.panel === this.props.contextId;
          let menuItem = $$('button').addClass('se-menu-item').append(
            label
          ).on('click', this._panelSelected.bind(this, entry.panel));
          if (isActive) {
            menuItem.addClass('sm-active');
          }
          menuEl.append(
            menuItem
          );
        } else if (entry.group) {
          let label = this.context.labelProvider.getLabel(entry.group);
          menuEl.append(
            $$('div').addClass('se-menu-group').append(
              label
            )
          );
        }
      });
      el.append(menuEl);
    }
    return el
  }

  _panelSelected(contextId) {
    this.send('navigate', contextId);
    // Close popup
    this.setState({
      expanded: false
    });
  }

  _toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

}

// HACK: we need this info to pass the right node to the component shown in the
// context panel. By default we pass article-meta as the
// TODO: we need a better solution to this, so a new metadata panel can
// be introduced without having to update this map
let NODE_SELECTORS = {
  'contributors': 'article-meta contrib-group',
  'affiliations': 'article-meta aff-group',
  'pub-history': 'article-meta > history',
};

class ContextSection extends substance.Component {

  getInitialState() {
    return {
      contextId: 'toc'
    }
  }

  didMount() {
    this.handleActions({
      'navigate': this._navigate
    });
  }

  _getNode() {
    const doc = this.context.editorSession.getDocument();
    if (this.state.nodeId) {
      return doc.get(this.state.nodeId)
    } else {
      let selector = NODE_SELECTORS[this.state.contextId] || 'article-meta';
      return doc.find(selector)
    }
  }

  /*
    Renders Navigator which shows a label for the active panel, and when
    clicked brings up a dropdown to navigate.
  */
  render($$) {
    const panelsSpec = this.props.panelsSpec;
    let contextId = this.state.contextId;
    let node = this._getNode();
    let el = $$('div').addClass('sc-context-section');

    let ComponentClass = this.getComponent(contextId);
    el.append(
      $$(Navigator, {
        contextId: contextId,
        panelsSpec: panelsSpec
      }).ref('navigator')
    );
    if (!node) {
      console.error('FIXME: could not find node for context section.');
    } else {
      el.append(
        $$('div').addClass('se-context-content').append(
          $$(ComponentClass, {
            node: node
          })
        )
      );
    }
    return el
  }

  _navigate(contextId) {
    this.setState({
      contextId: contextId
    });
  }
}

class Editor extends AbstractWriter {

  didMount() {
    super.didMount();
    this.handleActions({
      'switchContext': this._switchContext
    });
  }

  /*
    Switches the state of the context panel
  */
  _switchContext(state) {
    this.refs.contextSection.setState(state);
  }

  render($$) {
    let el = $$('div').addClass('sc-editor');
    el.append(
      this._renderMainSection($$),
      this._renderContextSection($$)
    );
    return el
  }

  _renderContextSection($$) {
    const configurator = this.getConfigurator();
    return $$(ContextSection, {
      panelsSpec: configurator.getPanelsSpec()
    }).ref('contextSection')
  }

  _renderMainSection($$) {
    const configurator = this.getConfigurator();
    let mainSection = $$('div').addClass('se-main-section');
    mainSection.append(
      this._renderToolbar($$),
      this._renderContentPanel($$),
      $$(substance.WorkflowPane, {
        toolPanel: configurator.getToolPanel('workflow')
      })
    );
    return mainSection
  }

  _renderContentPanel($$) {
    const doc = this.editorSession.getDocument();
    const configurator = this.getConfigurator();
    const ManuscriptComponent = this.getComponent('manuscript');
    const Overlay = this.getComponent('overlay');
    // const ContextMenu = this.getComponent('context-menu')
    // const Dropzones = this.componentRegistry.get('dropzones', 'strict')

    const article = doc.get('article');

    let contentPanel = $$(substance.ScrollPane, {
      tocProvider: this.tocProvider,
      scrollbarType: 'substance',
      scrollbarPosition: 'left',
      highlights: this.contentHighlights,
    }).ref('contentPanel');

    let layout = $$(substance.Layout, {
      width: 'large'
    });

    layout.append(
      $$(ManuscriptComponent, {
        node: article,
        disabled: this.props.disabled
      })
    );

    contentPanel.append(
      layout,
      $$(Overlay, {
        toolPanel: configurator.getToolPanel('main-overlay'),
        theme: 'dark'
      })
      // $$(ContextMenu),
      // $$(Dropzones)
    );
    return contentPanel
  }

  _scrollTo(nodeId) {
    this.refs.contentPanel.scrollTo(`[data-id="${nodeId}"]`);
  }

  tocEntrySelected(nodeId) {
    const node = this.doc.get(nodeId);
    const editorSession = this.getEditorSession();
    const nodeComponent = this.refs.contentPanel.find(`[data-id="${nodeId}"]`);
    if (nodeComponent) {
      // TODO: it needs to be easier to retrieve the surface
      let surface = nodeComponent.context.surface;
      editorSession.setSelection({
        type: 'property',
        path: node.getPath(),
        startOffset: 0,
        surfaceId: surface.id,
        containerId: surface.getContainerId()
      });
      return this._scrollTo(nodeId)
    }
  }

  getConfigurator() {
    return this.props.editorSession.configurator
  }

  /*
    Exporter provided by Texture
  */
  _getExporter() {
    return this.context.exporter
  }

  _getTOCProvider() {
    let containerId = this._getBodyContentContainerId();
    let doc = this.editorSession.getDocument();
    return new TOCProvider(doc, {
      containerId: containerId
    })
  }

  _getBodyContentContainerId() {
    const doc = this.editorSession.getDocument();
    let bodyContent = doc.article.find('body-content');
    return bodyContent.id
  }


}

class TextNodeComponent extends substance.NodeComponent {

  render($$) {
    const node = this.props.node;
    const tagName = this.getTagName();

    let el = $$(tagName).addClass('sc-'+node.type)
      .attr('data-id', node.id);

    el.append($$(substance.TextPropertyComponent, {
      placeholder: this.props.placeholder,
      path: node.getPath()
    }).ref('text'));

    // TODO: ability to edit attributes
    return el
  }

  getTagName() {
    return 'div'
  }

}

/*
  Renders a text property as plain text into a `<span>` and rerenders on changes.
*/
class PlainTextComponent extends substance.Component {

  didMount() {
    const path = this.props.path;
    this.context.editorSession.onRender('document', this.rerender, this, { path });
  }

  dispose() {
    this.context.editorSession.off(this);
  }

  render($$) {
    const doc = this.context.editorSession.getDocument();
    const text = doc.get(this.props.path);
    return $$('span').append(text)
  }

}

class UnsupportedNodeComponent extends substance.IsolatedNodeComponent {
  _getContentClass() {
    return UnsupportedContentComponent
  }
}

class UnsupportedContentComponent extends substance.Component {

  render($$) {
    const node = this.props.node;
    let el = $$('div').addClass('sc-unsupported')
      .attr('data-id', node.id)
      .attr('contenteditable', false);
    el.append(
      $$('pre').text(node.toXML().serialize())
    );
    return el
  }

}

class UnsupportedInlineNodeComponent extends substance.Component {

  render($$) {
    const node = this.props.node;
    let el = $$('span').addClass('sc-unsupported-inline-node')
      .attr('data-id', node.id);
    el.append(
      $$('pre').text(node.toXML().serialize())
    );
    return el
  }

}

class AbstractComponent extends substance.Component {

  render($$) {
    const node = this.props.node;
    let el = $$('div')
      .addClass('sc-abstract')
      .attr('data-id', node.id);

    // There can be multiple abstracts. We just take the first
    const content = node.findChild('abstract-content');
    let contentEl;
    if (content) {
      contentEl = $$(this.getComponent('container'), {
        placeholder: 'Enter Abstract',
        name: 'abstractEditor',
        node: content,
        disabled: this.props.disabled
      });
    } else {
      // TODO: ability to add an abstract
    }
    el.append(contentEl);

    return el
  }

}

/*
  Edit affiliations for a publication in this MetadataSection
*/
class AffiliationsComponent extends substance.NodeComponent {

  render($$) {
    const affGroup = this.props.node;
    const TextPropertyEditor$$1 = this.getComponent('text-property-editor');
    let el = $$('div').addClass('sc-affiliations');

    affGroup.getChildren().forEach((aff) => {
      let stringAff = aff.findChild('string-aff');
      // at the moment we only render string-affs
      if (stringAff) {
        el.append(
          $$('div').addClass('se-aff').append(
            $$(TextPropertyEditor$$1, {
              placeholder: 'Enter affiliation title',
              path: stringAff.getTextPath(),
              disabled: this.props.disabled
            }).addClass('se-text-input').ref(stringAff.id),
            $$('div').addClass('se-remove-aff').append(
              $$(substance.FontAwesomeIcon, { icon: 'fa-trash' })
            ).on('click', this._removeAffiliation.bind(this, aff.id))
          )
        );
      }
    });

    el.append(
      $$('button').addClass('se-metadata-affiliation-add')
        .append('Add Affiliation')
        .on('click', this._addAffiliation)
    );
    return el
  }

  _addAffiliation() {
    const nodeId = this.props.node.id;
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let affGroup = doc.get(nodeId);
      let aff = doc.createElement('aff').attr('aff-type', 'foo');
      aff.append(
        doc.createElement('string-aff')
      );
      affGroup.append(aff);
    });
  }

  _removeAffiliation(affId) {
    const nodeId = this.props.node.id;
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      const affGroup = doc.get(nodeId);
      let aff = affGroup.find(`aff#${affId}`);
      affGroup.removeChild(aff);
    });
  }
}

class AffiliationsList extends substance.Component {

  didMount() {
    super.didMount();
    this.context.editorSession.onRender('document', this._onDocumentChange, this);
  }

  dispose() {
    super.dispose();
    this.context.editorSession.off(this);
  }

  render($$) {
    const articleMeta = this.props.node;
    const affiliations = articleMeta.findAll('string-aff');
    const affs = affiliations.map(aff => { return aff.getTextContent() });
    
    let el = $$('div').addClass('sc-affiliations-list')
      .append(affs.join('; '));

    return el
  }

  _onDocumentChange(change) {
    let updatedProps = Object.keys(change.updated);
    let updatedPropsString = updatedProps.join('/');
    // We will trigger rerendering if any string-aff 
    // or aff-group were updated
    if(updatedPropsString.indexOf('string-aff') > -1 || updatedPropsString.indexOf('aff-group') > -1) {
      this.rerender();
    } 
  }

}

class AuthorsListComponent extends substance.Component {

  didMount() {
    super.didMount();
    this.context.editorSession.onRender('document', this._onDocumentChange, this);
  }

  dispose() {
    super.dispose();
    this.context.editorSession.off(this);
  }

  render($$) {
    const articleMeta = this.props.node;
    const contribs = articleMeta.findAll('string-contrib');
    const authors = contribs.map(contrib => { return contrib.getTextContent() });
    
    let el = $$('div').addClass('sc-authors-list')
      .append(authors.join(', '));

    return el
  }

  _onDocumentChange(change) {
    let updatedProps = Object.keys(change.updated);
    let updatedPropsString = updatedProps.join('/');
    // We will trigger rerendering if any string-contrib 
    // or contrib-group was updated
    if(updatedPropsString.indexOf('string-contrib') > -1 || updatedPropsString.indexOf('contrib-group') > -1) {
      this.rerender();
    } 
  }

}

const LABELS = {
  'print': 'Print',
  'electronic': 'Electronic'
};

const DATE_TYPES = {
  'accepted': 'Accepted',
  'corrected': 'Corrected',
  'pub': 'Published',
  'preprint': 'Preprint',
  'retracted': 'Retracted',
  'received': 'Received',
  'rev-recd': 'Revision Received',
  'rev-request': 'Revision Requested'
};

class ArticleRecordComponent extends substance.NodeComponent {


  didMount() {
    super.didMount();
    let articleMeta = this.props.node;
    let contentLoc = articleMeta.find('content-loc');
    this.context.editorSession.onRender('document', this.rerender, this, { path: [contentLoc.id]});
  }

  dispose() {
    super.dispose();
  }

  render($$) {
    let el = $$('div').addClass('sc-article-record');

    let articleMeta = this.props.node;
    let contentLoc = articleMeta.find('content-loc');
    let contentLocType = contentLoc.attr('type');

    let volume = articleMeta.findChild('volume');
    let issue = articleMeta.findChild('issue');
    let fpage = contentLoc.findChild('fpage');
    let lpage = contentLoc.findChild('lpage');
    let pageRange = contentLoc.findChild('page-range');
    let eLocationId = contentLoc.findChild('elocation-id');

    el.append(this._renderContentLocTypeSwitcher($$, contentLocType));

    if (contentLocType === 'print') {
      // TODO: we should make these non-optional in TextureJATS
      if (volume) {
        el.append(this._renderTextEditor($$, volume, 'Volume', 'text'));
      }
      if (issue) {
        el.append(this._renderTextEditor($$, issue, 'Issue', 'text'));
      }
      el.append(this._renderTextEditor($$, fpage, 'First page', 'text'));
      el.append(this._renderTextEditor($$, lpage, 'Last page', 'text'));
      el.append(this._renderTextEditor($$, pageRange, 'Page Range', 'text'));
    } else if (contentLocType === 'electronic') {
      el.append(this._renderTextEditor($$, eLocationId, 'E-Location ID', 'text'));
    }

    el.append(
      this._renderHistory($$)
    );
    return el
  }

  _renderHistory($$) {
    let el = $$('div').addClass('se-history');
    let articleMeta = this.props.node;
    let history = articleMeta.find('history');
    let dateTypes = Object.keys(DATE_TYPES);
    dateTypes.forEach((dateType) => {
      el.append(this._renderDateEditor($$, dateType, history));
    });
    return el
  }

  _renderContentLocTypeSwitcher($$, contentLocType) {
    let el = $$('div').addClass('se-content-loc-type');
    let select = $$('select').on('change', this._onContentLocTypeChange).ref('contentLocType');
    let options = ['print', 'electronic'];

    options.forEach((option) => {
      let optionEl = $$('option').attr('value', option).append(
        LABELS[option]
      );
      if (option === contentLocType) {
        optionEl.attr('selected', 'selected');
      }
      select.append(optionEl);
    });

    el.append(
      $$('div').addClass('se-label').append('Type'),
      $$('div').addClass('se-select').append(select)
    );
    return el
  }

  _onContentLocTypeChange() {
    let newContentLocType = this.refs.contentLocType.val();
    this.context.editorSession.transaction((tx) => {
      let contentLoc = tx.find('article-meta > content-loc');
      contentLoc.attr('type', newContentLocType);
    });
  }

  _renderTextEditor($$, metaEl, name, type) {
    let id = metaEl.id;
    let value = metaEl.getText();
    let el = $$('div').addClass('se-metadata-item').append(
      $$('div').addClass('se-label').append(name),
      $$('input').attr({type: type, value: value})
        .addClass('se-text-input')
        .ref(id)
        .on('change', this._updateTextProp.bind(this, metaEl))
    );
    return el
  }

  _renderDateEditor($$, dateType, history) {
    let date = history.find(`date[date-type=${dateType}]`);
    let el = $$('div').addClass('se-date-item');

    if (date) {
      let dateFormat = date.attr('format') || 'standard';
      let year = date.find('year');
      let month = date.find('month');
      let day = date.find('day');
      let season = date.find('season');

      if (dateFormat === 'standard') {
        // year+month+day
        el.append(
          $$('div').addClass('se-label').append(DATE_TYPES[dateType]),
          $$('div').addClass('se-content').append(
            $$('input').attr({ type: 'text', value: year.getText(), placeholder: 'YYYY' })
              .ref(year.id)
              .on('change', this._updateTextProp.bind(this, year)),
            $$('input').attr({ type: 'text', value: month.getText(), placeholder: 'MM' })
              .ref(month.id)
              .on('change', this._updateTextProp.bind(this, month)),
            $$('input').attr({ type: 'text', value: day.getText(), placeholder: 'DD' })
              .ref(day.id)
              .on('change', this._updateTextProp.bind(this, day))
          )
        );
      } else if (dateFormat === 'seasonal') {
        // season+year
        el.append(
          $$('div').addClass('se-label').append(DATE_TYPES[dateType]),
          $$('div').addClass('se-content').append(
            $$('input').attr({ type: 'text', value: year.getText(), placeholder: 'YYYY' })
              .ref(year.id)
              .on('change', this._updateTextProp.bind(this, year)),
            $$('input').attr({ type: 'text', value: season.getText(), placeholder: 'Season' })
              .ref(season.id)
              .on('change', this._updateTextProp.bind(this, season))
          )
        );
      } else if (dateFormat === 'custom') {
        console.warn('string-date not yet supported');
      }
      return el
    } else {
      console.warn('date-type', dateType, 'not found in <history>');
    }

  }

  _updateTextProp(metaEl) {
    let id = metaEl.id;
    let path = metaEl.getPath();
    let value = this.refs[id].val();
    let editorSession = this.context.editorSession;
    editorSession.transaction(doc => {
      doc.set(path, value);
    });
  }

}

/*
  Simplistic back-matter displaying references and appendixes
*/
class BackComponent extends substance.Component {

  render($$) {
    const node = this.props.node;

    let el = $$('div').addClass('sc-back')
      .attr('data-id', node.id);

    // TODO: show all, or think about how to render the whole back matter
    let refList = node.find('ref-list');
    if (refList) {
      el.append(
        $$(this.getComponent('ref-list'), { node: refList })
      );
    }

    let fnGroup = node.find('fn-group');
    if (fnGroup) {
      el.append(
        $$(this.getComponent('fn-group'), { node })
      );
    }
    return el
  }

}

class BodyComponent extends substance.Component {

  render($$) {
    const body = this.props.node;
    let el = $$('div')
      .addClass('sc-body')
      .attr('data-id', body.id);

    // There can be multiple abstracts. We just take the first
    const content = body.findChild('body-content');
    let contentEl;
    if (content) {
      contentEl = $$(this.getComponent('container'), {
        name: 'bodyEditor',
        node: content,
        disabled: this.props.disabled
      });
    } else {
      // TODO: ability to add an abstract
    }
    el.append(contentEl);

    // optional sig-block
    let sigBlock = body.findChild('sig-block');
    if (sigBlock) {
      el.append(
        $$(this.getComponent('sig-block'), { node: sigBlock })
      );
    } else {
      // TODO: means to add a signature
    }

    return el
  }

}

class BreakComponent extends substance.Component {
  render($$) {
    return $$('br')
  }
}

/*
  Customized ContainerEditor that produces a fall-back display
  for nodes which are not supported yet.
*/
class TextureContainerEditor extends substance.ContainerEditor {

  _renderNode($$, node) {
    if (!node) throw new Error("'node' is mandatory")
    let props = { node };
    let el;
    let ComponentClass = this.getComponent(node.type, true);
    if (node.isText()) {
      if (ComponentClass) {
        el = $$(ComponentClass, props);
      } else {
        el = $$(this.getComponent('text-node'), props);
      }
    } else {
      if (ComponentClass) {
        if (ComponentClass.prototype._isCustomNodeComponent || ComponentClass.prototype._isIsolatedNodeComponent) {
          el = $$(ComponentClass, props);
        } else {
          el = $$(substance.IsolatedNodeComponent, props);
        }
      } else {
        el = $$(this.getComponent('unsupported'), props);
      }
    }
    el.ref(node.id);
    return el
  }

}

class ContainerNodeComponent extends substance.Component {

  render($$) {
    const node = this.props.node;
    let el = $$('div').addClass('sc-'+node.type)
      .attr('data-id', node.id);

    el.append($$(TextureContainerEditor, {
      placeholder: this.props.placeholder,
      name: this.props.name,
      containerId: node.id,
      disabled: this.props.disabled
    }).ref('container'));
    // TODO: ability to edit attributes
    return el
  }

}

/*
  Edit contributors for a publication in this MetadataSection
*/
class ContributorsComponent extends substance.NodeComponent {

  render($$) {
    const contribGroup = this.props.node;
    const doc = contribGroup.getDocument();
    let el = $$('div').addClass('sc-contributors');
    let affs = doc.findAll('article-meta > aff-group > aff');
    contribGroup.getChildren().forEach((contrib) => {
      if (contrib.type === 'contrib') {
        el.append(
          this._renderContributor($$, contrib, affs)
        );
      }
    });
    el.append(
      $$('button').addClass('se-metadata-contributor-add')
        .append('Add Contributor')
        .on('click', this._addContributor)
    );
    return el
  }

  _renderContributor($$, contrib, affs) {
    let el = $$('div').addClass('se-metadata-contributor');
    el.append(
      this._renderName($$, contrib),
      this._renderAffiliations($$, contrib, affs),
      $$(substance.FontAwesomeIcon, {icon: 'fa-trash'})
        .addClass('se-remove-contributor')
        .on('click', this._removeContributor.bind(this, contrib.id))
    );
    return el
  }

  _renderName($$, contrib) {
    let TextPropertyEditor$$1 = this.getComponent('text-property-editor');
    let stringContrib = contrib.find('string-contrib');
    return $$('div').addClass('se-name').append(
      $$('div').addClass('se-label').append('Name'),
      $$(TextPropertyEditor$$1, {
        placeholder: 'Enter Name',
        path: stringContrib.getTextPath(),
        disabled: this.props.disabled
      }).ref(stringContrib.id).addClass('se-text-input')
    )
  }

  _renderAffiliations($$, contrib, affs) {
    return $$('div').addClass('se-affiliations').append(
      $$('div').addClass('se-label').append('Affiliations'),
      this._renderAffChoices($$, contrib, affs)
    )
  }

  _renderAffChoices($$, contrib, affs) {
    if(affs.length === 0) {
      return $$('div').addClass('se-empty')
        .append('Please add affiliations first')
    }

    let props = {
      options: [],
      selectedOptions: this._getAffReferences(contrib),
      maxItems: 2
    };

    affs.forEach((aff) => {
      let stringAff = aff.find('string-aff');
      props.options.push({id: aff.id, label: stringAff.getText()});
    });

    let MultiSelect = this.getComponent('multi-select');
    return $$(MultiSelect, props)
      .ref(contrib.id + '_affs')
      .on('change', this._updateAffiliations.bind(this, contrib.id))
  }

  _getAffReferences(contrib) {
    let attrIds = contrib.getAttribute('aff-ids') || '';
    return attrIds.split(' ')
  }

  _updateAffiliations(contribId) {
    const editorSession = this.context.editorSession;
    let affSelector = this.refs[contribId + '_affs'];
    let affIds = affSelector.getSelectedOptions();
    editorSession.transaction((doc) => {
      let contrib = doc.get(contribId);
      contrib.setAttribute('aff-ids', affIds.join(' '));
    });
  }

  _addContributor() {
    const nodeId = this.props.node.id;
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let contribGroup = doc.get(nodeId);
      let contrib = doc.createElement('contrib').attr('aff-type', 'foo');
      contrib.append(
        doc.createElement('string-contrib')
      );
      contribGroup.append(contrib);
    });
  }

  _removeContributor(contribId) {
    const nodeId = this.props.node.id;
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      const contribGroup = doc.get(nodeId);
      let contrib = contribGroup.find(`contrib#${contribId}`);
      contribGroup.removeChild(contrib);
    });
  }

}

class ElementNodeComponent extends substance.NodeComponent {

  render($$) {
    const node = this.props.node;
    let el = $$(this.getTagName())
      .addClass(this.getClassNames());
    node.getChildren().forEach(child => {
      el.append(
        $$(this.getComponent(child.type), {
          node: child
        }).ref(child.id)
      );
    });
    return el
  }

  getTagName() {
    return this.props.node.type
  }

  getClassNames() {
    return `sc-${this.props.node.type}`
  }

}

/*
  Editing of XRefTargets
*/
class EditXRefTool extends substance.Tool {

  _getNode(nodeId) {
    return this.context.editorSession.getDocument().get(nodeId)
  }

  getInitialState() {
    return this._computeState(this.props.commandState.nodeId)
  }

  _computeState(nodeId) {
    return {
      targets: getAvailableXrefTargets(this._getNode(nodeId), this.context.labelGenerator)
    }
  }

  willReceiveProps(props) {
    let newState = this._computeState(props.commandState.nodeId);
    this.setState(newState);
  }

  // this.dispose = function() {
  //   console.log('XRefTargets.dispose', this.__id__);
  // };

  render($$) {
    let el = $$('div').addClass('sc-edit-xref-tool');
    this.state.targets.forEach(function(target) {
      let TargetComponent = this.getComponent(target.node.type+'-preview');
      let props = substance.clone(target);
      // Disable editing in TargetComponent
      props.disabled = true;
      el.append(
        $$(TargetComponent, props)
          .on('click', this._toggleTarget.bind(this, target.node))
      );
    }.bind(this));
    return el
  }

  _toggleTarget(targetNode) {
    let node = this._getNode(this.props.commandState.nodeId);
    let editorSession = this.context.editorSession;
    // console.log('XRefTargets: toggling target of ', node.id);

    // Update model
    let newTargets = getXrefTargets(node);
    if (newTargets.indexOf(targetNode.id) >= 0) {
      newTargets = substance.without(newTargets, targetNode.id);
    } else {
      newTargets.push(targetNode.id);
    }

    // Compute visual feedback
    let targets = this.state.targets;
    let target = substance.find(this.state.targets, function(t) {
      return t.node === targetNode
    });

    // Flip the selected flag
    target.selected = !target.selected;

    editorSession.transaction(function(doc) {
      let xref = doc.get(node.id);
      xref.setAttribute('rid', newTargets.join(' '));
    });

    // Triggers a rerender
    this.setState({
      targets: targets
    });
  }
}

const refTypes = [
  {id: 'joural', label: 'Journal article'},
  {id: 'book', label: 'Book chapter'},
];

class EditRef extends substance.Component {

  /*
    TODO:
      - Add missing forms
      - We need different forms for different ref types
      - Implement only publication-type="journal" and publication-type="book"
  */
  render($$) {
    let elementCitation = this.props.node.find('element-citation');
    let publicationType = elementCitation.getAttribute('publication-type');
    let el = $$('div').addClass('sc-edit-ref');

    if(publicationType === 'journal') {
      el.append(this._renderJournalRefForm($$));
    } else if (publicationType === 'book') {
      el.append(this._renderBookRefForm($$));
    } else {
      el.append(`Editing of the publication type ${publicationType} is not yet supported in this Alpha version.`);
    }
    return el
  }

  _renderJournalRefForm($$) {
    let el = $$('div').addClass('se-journal-ref');

    el.append(
      this._renderRefTypeSwitcher($$),
      this._renderArticleTitle($$),
      this._renderAuthors($$),
      this._renderSource($$, 'Jounal Title'),
      this._renderPeriodical($$),
      this._renderElocation($$),
      this._renderPages($$),
      this._renderDOI($$),
      this._renderPMID($$),
      this._renderComment($$)
    );

    return el
  }

  _renderBookRefForm($$) {
    let el = $$('div').addClass('se-book-ref');

    el.append(
      this._renderRefTypeSwitcher($$),
      this._renderSource($$, 'Book Title'),
      this._renderAuthors($$),
      this._renderChapterTitle($$),
      this._renderPublisherLocation($$),
      this._renderPublisherName($$),
      this._renderPublishingYear($$),
      this._renderPages($$),
      this._renderComment($$)
    );

    return el
  }

  _renderRefTypeSwitcher($$) {
    let elementCitation = this.props.node.find('element-citation');
    let publicationType = elementCitation.getAttribute('publication-type');
    let el = $$('div').addClass('se-ref-type');

    let switcher = $$('select').on('change', this._onRefTypeChange);
    refTypes.forEach(refType => {
      let option = $$('option').attr('value', refType.id).append(refType.label);
      if(publicationType === refType.id) option.attr('selected', 'selected');
      switcher.append(option);
    });

    el.append(
      $$('div').addClass('se-label').append('Type'),
      $$('div').addClass('se-select').append(switcher)
    );

    return el
  }

  _renderArticleTitle($$) {
    let articleTitle = this.props.node.find('article-title');
    let TextPropertyEditor$$1 = this.getComponent('text-property-editor');

    return $$('div').addClass('se-article-title').append(
      $$('div').addClass('se-label').append('Article Title'),
      $$(TextPropertyEditor$$1, {
        placeholder: 'Article title',
        path: articleTitle.getTextPath(),
        disabled: this.props.disabled
      }).ref(articleTitle.id).addClass('se-text-input')
    )
  }

  _renderAuthors($$) {
    let authorNames = this.props.node.findAll('person-group[person-group-type=author] name');
    let el = $$('div').addClass('se-authors').append(
      $$('div').addClass('se-label').append('Authors')
    );

    authorNames.forEach(author => {
      let surname = author.find('surname');
      let givenName = author.find('given-names');
      let authorEl = $$('div').addClass('se-author se-form').append(
        this._renderTextElement($$, givenName, 'Given names'),
        this._renderTextElement($$, surname, 'Surname'),
        $$(substance.FontAwesomeIcon, {icon: 'fa-trash'})
          .addClass('se-remove-author')
          .on('click', this._removeAuthor.bind(this, author.id))
      );
      el.append(authorEl);
    });

    el.append(
      $$('button').addClass('sg-big-button')
        .append('Add Author')
        .on('click', this._addAuthor)
    );

    return el
  }

  _renderSource($$, label) {
    let source = this.props.node.find('source');
    let TextPropertyEditor$$1 = this.getComponent('text-property-editor');

    return $$('div').addClass('se-source').append(
      $$('div').addClass('se-label').append(label),
      $$(TextPropertyEditor$$1, {
        placeholder: label,
        path: source.getTextPath(),
        disabled: this.props.disabled
      }).ref(source.id).addClass('se-text-input')
    )
  }

  _renderChapterTitle($$) {
    let chapterTitle = this.props.node.find('chapter-title');
    let TextPropertyEditor$$1 = this.getComponent('text-property-editor');

    if(chapterTitle) {
      return $$('div').addClass('se-chapter-title').append(
        $$('div').addClass('se-label').append('Chapter Title'),
        $$(TextPropertyEditor$$1, {
          placeholder: 'Chapter title',
          path: chapterTitle.getTextPath(),
          disabled: this.props.disabled
        }).ref(chapterTitle.id).addClass('se-text-input')
      )
    } else {
      return
    }
  }

  _renderPublisherLocation($$) {
    let publisherLoc = this.props.node.find('publisher-loc');

    if(publisherLoc) {
      return $$('div').addClass('se-chapter-title').append(
        $$('div').addClass('se-label').append('Publisher Location'),
        this._renderTextElement($$, publisherLoc, 'Publisher location')
      )
    } else {
      return
    }
  }

  _renderPublisherName($$) {
    let publisherName = this.props.node.find('publisher-name');

    if(publisherName) {
      return $$('div').addClass('se-chapter-title').append(
        $$('div').addClass('se-label').append('Publisher Name'),
        this._renderTextElement($$, publisherName, 'Publisher name')
      )
    } else {
      return
    }
  }

  _renderPublishingYear($$) {
    let publisherYear = this.props.node.find('year');

    if(publisherYear) {
      return $$('div').addClass('se-chapter-title').append(
        $$('div').addClass('se-label').append('Publishing Year'),
        this._renderTextElement($$, publisherYear, 'Publisher year', 'number')
      )
    } else {
      return
    }
  }

  _renderElocation($$) {
    let el = $$('div').addClass('se-elocation');
    let form = $$('div').addClass('se-form');
    let elocationId = this.props.node.find('elocation-id');

    // TODO: we want this to be just one field
    // which is either used as elocation-id or as page range
    if (elocationId) {
      form.append(
        this._renderTextElement($$, elocationId, 'Electronic Location Identifier')
      );
      el.append(
        $$('div').addClass('se-label').append('Electronic Location Identifier'),
        form
      );
    }

    return el
  }

  _renderPeriodical($$) {
    let el = $$('div').addClass('se-pereodical');
    let form = $$('div').addClass('se-form');

    let volume = this.props.node.find('volume');
    let issue = this.props.node.find('issue');
    let year = this.props.node.find('year');

    let label = [];

    if (!volume) {
      console.error('FIXME: volume is missing');
    } else {
      label.push('Volume');
      form.append(
        this._renderTextElement($$, volume, 'Volume')
      );
    }

    if (!issue) {
      console.error('FIXME: issue is missing');
    } else {
      label.push('Issue');
      form.append(
        this._renderTextElement($$, issue, 'Issue')
      );
    }

    if (!year) {
      console.error('FIXME: year is missing');
    } else {
      label.push('Year');
      form.append(
        this._renderTextElement($$, year, 'Year')
      );
    }

    el.append(
      $$('div').addClass('se-label').append(label.join(' / ')),
      form
    );

    return el
  }

  _renderPages($$) {
    let el = $$('div').addClass('se-pages');

    let firstPage = this.props.node.find('fpage');
    let lastPage = this.props.node.find('lpage');

    if (!firstPage || !lastPage) {
      console.error('FIXME: fpage and lpage is missing');
      return el
    }

    let firstPageEditor = this._renderTextElement($$, firstPage, 'From');
    let lastPageEditor = this._renderTextElement($$, lastPage, 'To');
    el.append(
      $$('div').addClass('se-label').append('Pages (from-to)'),
      $$('div').addClass('se-form').append(
        firstPageEditor,
        lastPageEditor
      )
    );

    return el
  }

  _renderDOI($$) {
    let doi = this.props.node.find('pub-id[pub-id-type=doi]');

    if(doi) {
      return $$('div').addClass('se-doi').append(
        $$('div').addClass('se-label').append('DOI'),
        this._renderTextElement($$, doi, 'DOI of article')
      )
    } else {
      return
    }
  }

  _renderPMID($$) {
    let pmid = this.props.node.find('pub-id[pub-id-type=pmid]');

    if(pmid) {
      return $$('div').addClass('se-pmid').append(
        $$('div').addClass('se-label').append('PMID'),
        this._renderTextElement($$, pmid, 'PubMed identifier')
      )
    } else {
      return
    }
  }

  _renderComment($$) {
    let comment = this.props.node.find('comment');
    let TextPropertyEditor$$1 = this.getComponent('text-property-editor');

    if(comment) {
      return $$('div').addClass('se-comment').append(
        $$('div').addClass('se-label').append('Comment'),
        $$(TextPropertyEditor$$1, {
          placeholder: 'Additional comments',
          path: comment.getTextPath(),
          disabled: this.props.disabled
        }).ref(comment.id).addClass('se-text-input')
      )
    } else {
      return
    }
  }

  _renderTextElement($$, node, placeholder) {
    let TextPropertyEditor$$1 = this.getComponent('text-property-editor');
    let el = $$(TextPropertyEditor$$1, {
      placeholder: placeholder,
      path: node.getTextPath(),
      disabled: this.props.disabled
    }).ref(node.id).addClass('se-text-input');

    return el
  }

  _addAuthor() {
    const node = this.props.node;
    const personGroupId = node.find('person-group[person-group-type=author]').id;
    const editorSession = this.context.editorSession;
    editorSession.setSelection(null);
    editorSession.transaction((doc) => {
      let personGroup = doc.get(personGroupId);
      let name = doc.createElement('name').append(
        doc.createElement('given-names'),
        doc.createElement('surname')
      );
      personGroup.append(name);
    });

    this.rerender();
  }

  _removeAuthor(authorId) {
    const node = this.props.node;
    const personGroupId = node.find('person-group[person-group-type=author]').id;
    const editorSession = this.context.editorSession;
    editorSession.setSelection(null);
    editorSession.transaction((doc) => {
      let personGroup = doc.get(personGroupId);
      let author = personGroup.find(`name#${authorId}`);
      personGroup.removeChild(author);
    });
    this.rerender();
  }

  _onRefTypeChange() {
    alert('Switching the publication type is not yet supported in this Alpha version.'); // eslint-disable-line
  }

  /*
    This updates a text node with new text
  */
  _onUpdateTextElement(nodeId) {
    let newValue = this.refs[nodeId].val();
    let editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let element = doc.get(nodeId);
      element.setText(newValue);
      doc.setSelection(null);
    });
    // Trigger custom ref:updated which leads to an update of the rendered
    // record (see RefComponent)
    editorSession.emit('ref:updated', this.props.node.id);
  }

}

const { EditLinkTool } = substance.LinkPackage;

class EditExtLinkTool extends EditLinkTool {}

EditExtLinkTool.urlPropertyPath = ['attributes', 'xlink:href'];

class FigComponent extends substance.NodeComponent {

  didMount() {
    super.didMount();
    this.context.labelGenerator.on('labels:generated', this._onLabelsChanged, this);
  }

  dispose() {
    super.dispose();
    this.context.labelGenerator.off(this);
  }

  render($$) {
    const node = this.props.node;
    const labelGenerator = this.context.labelGenerator;

    let el = $$('div')
      .addClass('sc-'+node.type)
      .attr('data-id', node.id);

    let label = labelGenerator.getLabel(REF_TYPES[node.type], [node.id]);
    let labelEl = $$('div').addClass('se-label').text(label);
    el.append(labelEl);

    const figType = this._getContentType();
    const content = node.findChild(figType);
    let contentEl;
    if (content) {
      contentEl = $$(this.getComponent(figType), {
        node: content,
        disabled: this.props.disabled
      });
      el.append(contentEl.ref('content'));
    }

    const title = node.findChild('title');
    let titleEl = $$(this.getComponent('text-property-editor'), {
      path: title.getTextPath(),
      disabled: this.props.disabled
    }).addClass('se-title').ref('title');
    el.append(titleEl);

    const caption = node.findChild('caption');
    let captionEl;
    if (caption) {
      captionEl = $$(this.getComponent('caption'), {
        node: caption,
        disabled: this.props.disabled
      });
    } else {
      // TODO: ability to add a caption
    }
    el.append(captionEl.ref('caption'));

    return el
  }

  _getContentType() {
    switch(this.props.node.type) {
      case 'table-wrap': {
        return 'table'
      }
      default: return 'graphic'
    }
  }

  _onLabelsChanged(refType) {
    if (refType === this.props.node.type) {
      this.rerender();
    }
  }

}

class CaptionComponent extends substance.Component {

  render($$) {
    const node = this.props.node;

    let el = $$('div')
      .addClass('sc-caption')
      .attr('data-id', node.id);
    let contentEl = $$(this.getComponent('container'), {
      node: node,
      disabled: this.props.disabled
    });
    el.append(contentEl);
    return el
  }
}

/*
  Simplistic front-matter displaying title, abstract and authors
*/
class FrontComponent extends substance.Component {

  render($$) {
    const node = this.props.node;

    let el = $$('div')
      .addClass('sc-front')
      .attr('data-id', node.id);

    // article-meta is mandatory
    const articleMeta = node.findChild('article-meta');

    // Title

    // title-group is optional
    const titleGroup = articleMeta.findChild('title-group');
    let titleGroupEl;
    if (titleGroup) {
      titleGroupEl = $$(this.getComponent('title-group'), {
        node: titleGroup,
        disabled: this.props.disabled
      });
    } else {
      // TODO: ability to add a title
      titleGroupEl = $$('div').addClass('sc-title-group');
    }
    el.append(titleGroupEl);

    // Authors and affiliations
    let authorsListEl = $$(this.getComponent('authors-list'), {
      node: node
    });
    el.append(authorsListEl);

    let affiliationsListEl = $$(this.getComponent('affiliations-list'), {
      node: node
    });
    el.append(affiliationsListEl);

    // Abstract

    // There can be multiple abstracts. We just take the first
    const abstract = articleMeta.findChild('abstract');
    let abstractEl;
    if (abstract) {
      abstractEl = $$(this.getComponent('abstract'), {
        node: abstract,
        disabled: this.props.disabled
      });
    } else {
      // TODO: ability to add an abstract
      abstractEl = $$('div').addClass('sc-abstract');
    }
    el.append(abstractEl.ref('abstract'));

    return el
  }
}

class GraphicComponent extends substance.Component {

  render($$) {
    const node = this.props.node;
    const url = node.getAttribute('xlink:href');

    let el = $$('div')
      .addClass('sc-graphic')
      .attr('data-id', node.id);
    el.append(
      $$('img').attr({src: url}).ref('image')
    );
    return el
  }
}

class DispQuote extends substance.Component {
  render($$) {
    const node = this.props.node;
    let quoteContent = node.find('disp-quote-content');
    let attribContent = node.find('attrib');
    
    let el = $$('div')
      .addClass('sc-disp-quote')
      .attr('data-id', node.id);

    let quoteContentEl = $$(this.getComponent('container'), {
      node: quoteContent,
      disabled: this.props.disabled
    }).ref('editor');

    let attribContentEl = $$(substance.TextPropertyEditor, {
      placeholder: 'Enter attribution',
      path: attribContent.getTextPath(),
      disabled: this.props.disabled
    }).addClass('se-attribution');
    
    el.append(
      quoteContentEl,
      attribContentEl
    );

    return el
  }
}

class TableCellComponent extends substance.NodeComponent {

  render($$) {
    let node = this.props.node;
    let el = $$(node.type);
    el.attr({
      align: node.attr('align'),
      colspan: node.attr('colspan'),
      rowspan: node.attr('rowspan')
    });
    el.append(
      $$(substance.TextPropertyEditor, {
        path: node.getTextPath(),
        disabled: this.props.disabled
      }).ref('editor')
    );
    return el
  }

}

class HeadingComponent extends TextNodeComponent {

  getLevel() {
    return parseInt(this.props.node.level, 10) || 1
  }

  getTagName() {
    return 'h'+this.getLevel()
  }
}

class ManuscriptComponent extends substance.Component {

  render($$) {
    const article = this.props.node;
    let el = $$('div')
      .addClass('sc-article')
      .attr('data-id', article.id);

    // front is mandatory
    const front = article.findChild('front');
    const FrontComponent = this.getComponent('front');
    el.append($$(FrontComponent, {
      node: front
    }).ref('front'));

    // body is optional
    // TODO: do we really want this? Otherwise we need to change TextureJATS
    // and create an empty body on import
    const body = article.findChild('body');
    if (body) {
      el.append($$(this.getComponent('separator'), {
        label: 'manuscript-start'
      }));
      const BodyComponent = this.getComponent('body');
      el.append($$(BodyComponent, {
        node: body
      }).ref('body'));
      el.append($$(this.getComponent('separator'), {
        label: 'manuscript-end'
      }));
    }

    const back = article.findChild('back');
    if (back) {
      const BackComponent = this.getComponent('back');
      el.append($$(BackComponent, {
        node: back
      }).ref('back'));
    }

    return el
  }

}

/*
  Edit publication history in this MetadataSection
*/
class PubHistoryComponent extends substance.NodeComponent {

  render($$) {
    let el = $$('div').addClass('sc-publication-history');
    let history = this.props.node;
    let dates = history.findAll('date');
    dates.forEach((date) => {
      const type = date.attr('date-type');
      el.append(
        this._renderDateEditor($$, date, this.getLabel(type))
      );
    });
    return el
  }

  _renderDateEditor($$, metaEl, name) {
    let id = metaEl.id;
    let value = metaEl.getAttribute('iso-8601-date');
    let el = $$('div').addClass('se-metadata-item').append(
      $$('div').addClass('se-label').append(name),
      $$('input').attr({type: 'date', value: value})
        .addClass('se-text-input')
        .ref(id)
        .on('change', this._updateDateProp.bind(this, metaEl))
    );
    return el
  }

  _updateDateProp(metaEl) {
    let id = metaEl.id;
    let value = this.refs[id].val();
    let editorSession = this.context.editorSession;
    editorSession.transaction(doc => {
      let metaProp = doc.get(id);
      metaProp.setAttribute('iso-8601-date', value);
    });
  }

  _toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

}

class TOC extends substance.Component {

  didMount() {
    let tocProvider = this.context.tocProvider;
    tocProvider.on('toc:updated', this.onTOCUpdated, this);
  }

  dispose() {
    let tocProvider = this.context.tocProvider;
    tocProvider.off(this);
  }

  render($$) {
    let tocProvider = this.context.tocProvider;
    let activeEntry = tocProvider.activeEntry;
    let tocEntries = $$("div")
      .addClass("se-toc-entries")
      .ref('tocEntries');

    let entries = tocProvider.getEntries();
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      let level = entry.level;

      let tocEntryEl = $$('a')
        .addClass('se-toc-entry')
        .addClass('sm-level-'+level)
        .attr({
          href: "#",
          "data-id": entry.id,
        })
        .ref(entry.id)
        .on('click', this.handleClick)
        .append(
          entry.name
        );
      if (activeEntry === entry.id) {
        tocEntryEl.addClass("sm-active");
      }
      tocEntries.append(tocEntryEl);
    }

    let el = $$('div').addClass('sc-toc').append(
      tocEntries
    );
    return el
  }

  getDocument() {
    return this.context.doc
  }

  onTOCUpdated() {
    this.rerender();
  }

  handleClick(e) {
    let nodeId = e.currentTarget.dataset.id;
    e.preventDefault();
    this.send('tocEntrySelected', nodeId);
  }

}

const languages = {
  cz: 'Czech',
  de: 'German',
  es: 'Spanish',
  fr: 'French'
};

/*
  Edit translations for title and abstract
*/
class TranslationsComponent extends substance.NodeComponent {

  didMount() {
    super.didMount();

    const articleMeta = this.props.node;
    let titleGroup = articleMeta.findChild('title-group');
    if (titleGroup) {
      this.context.editorSession.onRender('document', this.rerender, this, { path: [titleGroup.id]});
    }
    // TODO: in future, we could introduce an <abstract-group>
    // as a container for all <abstract> and <trans-abstracts>
  }

  dispose() {
    super.dispose();
  }

  render($$) {
    let el = $$('div').addClass('sc-translations');
    el.append(
      this._renderTitleTranslations($$),
      this._renderAbstractTranslations($$)
    );
    return el
  }

  _renderTitleTranslations($$) {
    const articleMeta = this.props.node;
    const transTitleGroups = articleMeta.findAll('title-group > trans-title-group');
    let el = $$('div').addClass('se-title-translations');
    if (transTitleGroups.length > 0) {
      el.append($$('div').addClass('se-translation-header').append('Title Translations'));
      transTitleGroups.forEach((transTitleGroup) => {
        el.append(this._renderTitleEditor($$, transTitleGroup));
      });
    }
    el.append(
      $$('button').addClass('se-add-translation')
        .append('Add Title Translation')
        .on('click', this._addTitleTranslation)
    );
    return el
  }

  _renderAbstractTranslations($$) {
    let articleMeta = this.props.node;
    let transAbstracts = articleMeta.findAll('trans-abstract');
    let el = $$('div').addClass('se-abstract-translations');
    if (transAbstracts.length > 0) {
      el.append($$('div').addClass('se-translation-header').append('Abstract Translations'));
      transAbstracts.forEach(transAbstract => {
        el.append(this._renderAbstractEditor($$, transAbstract));
      });
    }
    el.append(
      $$('button').addClass('se-add-translation')
        .append('Add Abstract Translation')
        .on('click', this._addAbstractTranslation)
    );
    return el
  }

  _renderLanguageSelector($$, node) {
    let currentLanguage = node.getAttribute('xml:lang');
    let el = $$('select').addClass('se-language-selector')
      .append(
        $$('option').attr({disabled: 'disabled', selected: 'selected'})
          .append('Select language...')
      )
      .on('change', this._onLanguageChange.bind(this, node));
    for(let lang in languages) {
      if(languages[lang]) {
        let option = $$('option')
          .attr({value: lang})
          .append(languages[lang]);
        if(lang === currentLanguage) option.attr({selected: 'selected'});
        el.append(option);
      }
    }
    return el
  }

  _renderTitleEditor($$, transTitleGroup) {
    const TextPropertyEditor$$1 = this.getComponent('text-property-editor');
    let transTitle = transTitleGroup.findChild('trans-title');
    let el = $$('div').addClass('se-translation');
    // TODO: add support for subtitles
    el.append(
      $$('div').addClass('se-options').append(
        this._renderLanguageSelector($$, transTitleGroup),
        $$('div').addClass('se-remove-translation').append(
          $$(substance.FontAwesomeIcon, { icon: 'fa-trash' })
        ).on('click', this._removeTitleTranslation.bind(this, transTitleGroup.id))
      ),
      $$(TextPropertyEditor$$1, {
        placeholder: 'Enter title translation',
        path: transTitle.getTextPath(),
        disabled: this.props.disabled
      }).ref(transTitle.id)
    );
    return el
  }

  _renderAbstractEditor($$, transAbstract) {
    const ContainerEditor$$1 = this.getComponent('container');
    let el = $$('div').addClass('se-translation');
    let abstractContent = transAbstract.findChild('abstract-content');
    let transEl = $$('div')
      .addClass('sc-abstract-translation')
      .attr('data-id', transAbstract.id);
    transEl.append(
      $$(ContainerEditor$$1, {
        placeholder: 'Enter abstract translation',
        node: abstractContent,
        disabled: this.props.disabled
      }).ref(abstractContent.id)
    );
    el.append(
      $$('div').addClass('se-options').append(
        this._renderLanguageSelector($$, transAbstract),
        $$('div').addClass('se-remove-translation').append(
          $$(substance.FontAwesomeIcon, { icon: 'fa-trash' })
        ).on('click', this._removeAbstractTranslation.bind(this, transAbstract.id))
      ),
      transEl
    );

    return el
  }

  _addTitleTranslation() {
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let titleGroup = doc.find('article-meta > title-group');
      let transTitleGroup = doc.createElement('trans-title-group');
      transTitleGroup.append(doc.createElement('trans-title'));
      titleGroup.append(transTitleGroup);
    });
  }

  _addAbstractTranslation() {
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let articleMeta = doc.get(this.props.node.id);
      let transAbstract = doc.createElement('trans-abstract');
      let content = doc.createElement('abstract-content');
      let placeholder = doc.createElement('p');
      content.append(placeholder);
      transAbstract.append(content);
      articleMeta.append(transAbstract);
    });
  }

  _removeTitleTranslation(nodeId) {
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let title = doc.get(nodeId);
      title.parentNode.removeChild(title);
    });
  }

  _removeAbstractTranslation(nodeId) {
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let transAbstract = doc.get(nodeId);
      transAbstract.parentNode.removeChild(transAbstract);
    });
  }

  _onLanguageChange(node, e) {
    let value = e.target.value;
    node.setAttribute('xml:lang', value);
  }

}

class FnGroupComponent extends substance.NodeComponent {

  didMount() {
    super.didMount();
    this.context.labelGenerator.on('labels:generated', this._onLabelsChanged, this);

    this.handleActions({
      'removeFn': this._removeFn
    });
  }

  dispose() {
    super.dispose();
    this.context.labelGenerator.off(this);
  }

  render($$) {
    const labelGenerator = this.context.labelGenerator;
    const node = this.props.node;

    let el = $$('div').addClass('sc-fn-group').append(
      $$('div').addClass('se-title').append('Footnotes')
    );

    let fns = node.findAll('fn');
    let entries = fns.map((fn) => {
      return {
        pos: labelGenerator.getPosition('fn', fn.id) || Number.MAX_VALUE,
        fn
      }
    });

    entries.sort((a,b) => {
      return a.pos - b.pos
    });
    entries.forEach((entry) => {
      const fn = entry.fn;
      let FnComponent = this.getComponent('fn');
      el.append(
        $$(FnComponent, { node: fn }).ref(fn.id)
      );
    });


    el.append(
      $$('div').append(
        $$('button').addClass('sg-big-button')
          .append('Add Footnote')
          .on('click', this._addFn)
      )
    );

    return el
  }

  _onLabelsChanged(refType) {
    if (refType === 'fn') {
      this.rerender();
    }
  }

  /*
    Insert new Footnote

    <fn id="fn2">
      <p>Please enter footnote content</p>
    </fn>
  */
  _addFn() {
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let fnGroup = doc.find('fn-group');
      let fn = doc.createElement('fn');
      let fnPlaceholder = doc.createElement('p');
      fn.append(fnPlaceholder);
      fnGroup.append(fn);
    });
    this.rerender();
  }

  _removeFn(fnId) {
    let editorSession = this.context.editorSession;
    editorSession.transaction(doc => {
      let xrefIndex = doc.getIndex('xrefs');
      let xrefs = xrefIndex.get(fnId);
      xrefs.forEach((xrefId) => {
        let xref = doc.get(xrefId);
        let idrefs = xref.attr('rid').split(' ');
        idrefs = substance.without(idrefs, fnId);
        xref.setAttribute('rid', idrefs.join(' '));
      });
      let fnGroup = doc.find('fn-group');
      let fn = fnGroup.find(`fn#${fnId}`);
      fnGroup.removeChild(fn);
    });
    this.rerender();
  }
}

class FnComponent extends substance.Component {
  render($$) {
    const node = this.props.node;
    let el = $$('div')
      .addClass('sc-fn-item')
      .attr('data-id', node.id);

    let label = this.context.labelGenerator.getPosition('fn', node.id);
    let contentEl = $$(this.getComponent('container'), {
      placeholder: 'Enter Footnote',
      node: node,
      disabled: this.props.disabled
    }).ref('editor');
    el.append(
      $$('div').addClass('se-fn-container').append(
        $$('div').addClass('se-label').append(
          label
        ),
        contentEl,
        $$('div').addClass('se-remove-ref')
          .append(
            $$(substance.FontAwesomeIcon, { icon: 'fa-trash' })
          )
          .on('click', this._removeFn.bind(this, node.id))
      )
    );
    return el
  }

  _removeFn(fnId) {
    this.send('removeFn', fnId);
  }
}

class RefListComponent extends substance.NodeComponent {

  didMount() {
    super.didMount();
    this.context.labelGenerator.on('labels:generated', this._onLabelsChanged, this);

    this.handleActions({
      'removeRef': this._removeRef
    });

    // Ensure we re-render when
    this.context.editorSession.onRender('document', this.rerender, this, {
      path: [this.props.node.id, 'content']
    });
  }

  dispose() {
    super.dispose();
    this.context.editorSession.off(this);
    this.context.labelGenerator.off(this);
  }

  render($$) {
    const labelGenerator = this.context.labelGenerator;
    const node = this.props.node;

    let el = $$('div').addClass('sc-ref-list');
    // NOTE: We don't yet expose RefList.label to the editor
    let title = node.find('title');
    if (title) {
      el.append(
        $$('div').addClass('se-title').append(
          $$(this.getComponent('text-property-editor'), {
            path: title.getTextPath(),
            disabled: this.props.disabled
          })
        )
      );
    }
    let refs = node.findAll('ref');
    let entries = refs.map((ref) => {
      return {
        // NOTE: refs without a position, i.e. which are not referenced
        // should end up at the end of the list
        pos: labelGenerator.getPosition('bibr', ref.id) || Number.MAX_VALUE,
        ref
      }
    });
    entries.sort((a,b) => {
      return a.pos - b.pos
    });
    entries.forEach((entry) => {
      const ref = entry.ref;
      let RefComponent = this.getComponent('ref');
      el.append(
        $$(RefComponent, { node: ref }).ref(ref.id)
      );
    });

    el.append(
      $$('div').append(
        $$('button').addClass('sg-big-button')
          .append('Add Reference')
          .on('click', this._addRef)
      )
    );
    return el
  }

  _onLabelsChanged(refType) {
    if (refType === 'bibr') {
      this.rerender();
    }
  }

  /*
    Insert new Reference

    <ref>
      <string-citation>Please enter publication name</string-citation>
    </ref>
  */
  _addRef() {
    const editorSession = this.context.editorSession;
    editorSession.transaction((doc) => {
      let refList = doc.find('ref-list');
      let ref = doc.createElement('ref');
      let elementCitation = doc.createElement('element-citation').attr('publication-type', 'journal');
      elementCitation.append(
        doc.createElement('person-group').attr('person-group-type', 'author'),
        doc.createElement('year').attr('iso-8601-date', ''),
        doc.createElement('article-title'),
        doc.createElement('source'),
        doc.createElement('volume'),
        doc.createElement('issue'),
        doc.createElement('fpage'),
        doc.createElement('lpage'),
        doc.createElement('pub-id').attr('pub-id-type', 'doi'),
        doc.createElement('pub-id').attr('pub-id-type', 'pmid')
      );
      ref.append(elementCitation);
      refList.append(ref);
      doc.setSelection(null);
    });
    this.rerender();
  }

  _removeRef(refId) {
    let editorSession = this.context.editorSession;
    editorSession.transaction(doc => {
      let xrefIndex = doc.getIndex('xrefs');
      let xrefs = xrefIndex.get(refId);
      xrefs.forEach((xrefId) => {
        let xref = doc.get(xrefId);
        let idrefs = xref.attr('rid').split(' ');
        idrefs = substance.without(idrefs, refId);
        xref.setAttribute('rid', idrefs.join(' '));
      });
      let fnGroup = doc.find('ref-list');
      let ref = fnGroup.find(`ref#${refId}`);
      fnGroup.removeChild(ref);
      doc.setSelection(null);
    });
    this.rerender();
  }

}

class ElementCitationTitle extends substance.Component {

  render($$) {
    let el = $$(this.props.tagName || 'div').addClass('sc-element-citation-title');
    let node = this.props.node;
    let title = node.find('article-title') || node.find('chapter-title');

    if (title && title.content) {
      el.append(
        $$(substance.TextPropertyComponent, {
          path: title.getPath()
        }).ref(title.id)
      );
    } else {
      el.append('No title available');
    }
    return el
  }
}

class ElementCitationAuthorsAndYear extends substance.Component {

  render($$) {
    let el = $$(this.props.tagName || 'div').addClass('sc-element-citation-authors-and-year');
    let authorNames = this.props.node.findAll('person-group[person-group-type=author] name');
    let year = this.props.node.find('year');
    let authors = authorNames.map(author => {
      let surname = author.find('surname');
      let givenName = author.find('given-names');
      return givenName.content + ' ' + surname.content
    });
    let authorsString = authors.join(', ');
    if(year) {
      if(year.content !== '') authorsString += ' (' + year.content + ')';
    }
    el.append(authorsString);
    return el
  }

}

class ElementCitationComponent extends substance.Component {
  render($$) {
    let node = this.props.node;
    let publicationType = node.getAttribute('publication-type');

    let el = $$('div').addClass('sc-element-citation').append(
      $$(ElementCitationTitle, { node }),
      $$(ElementCitationAuthorsAndYear, { node })
    );

    if(publicationType === 'journal') {
      el.append(
        this._renderJournalData($$),
        this._renderDOILink($$),
        this._renderScholarLinks($$)
      );
    } else if (publicationType === 'book') {
      el.append(this._renderBookData($$));
    }

    return el
  }

  _renderJournalData($$) {
    let source = this.props.node.find('source');
    let volume = this.props.node.find('volume');
    let issue = this.props.node.find('issue');
    let fpage = this.props.node.find('fpage');
    let lpage = this.props.node.find('lpage');

    let journalEl = $$('div').addClass('se-journal-data');

    if(source) {
      if(source.content !== '') {
        journalEl.append(
          $$('em').addClass('se-journal-name').append(source.content + ' ')
        );
      }
    }

    if(volume) {
      if(volume.content !== '') {
        journalEl.append(
          $$('strong').addClass('se-journal-volume').append(volume.content)
        );
      }
    }

    if(issue) {
      if(issue.content !== '') {
        journalEl.append(
          $$('strong').addClass('se-journal-issue').append('.' + issue.content)
        );
      }
    }

    if(fpage) {
      if(fpage.content !== '') {
        journalEl.append(':' + fpage.content);

        if(lpage) {
          if(lpage.content !== '') {
            journalEl.append('-' + lpage.content);
          } else {
            journalEl.append('.');
          }
        }
      }
    }

    return journalEl
  }

  _renderBookData($$) {
    let source = this.props.node.find('source');
    let publisherLoc = this.props.node.find('publisher-loc');
    let publisherName = this.props.node.find('publisher-name');
    let fpage = this.props.node.find('fpage');
    let lpage = this.props.node.find('lpage');

    let bookEl = $$('div').addClass('se-book-data');

    if(source) {
      bookEl.append(
        $$('em').addClass('se-book-name').append(source.content)
      );
    }

    if(fpage) {
      bookEl.append(': p.' + fpage.content);

      if(lpage) {
        bookEl.append('-' + lpage.content);
      }
    }

    if(publisherName) {
      let publisherEl = $$('div').addClass('se-publisher-data');
      publisherEl.append(publisherName.content);

      if(publisherLoc) {
        publisherEl.append(', ' + publisherLoc.content);
      }

      bookEl.append(publisherEl);
    }

    return bookEl
  }

  _renderDOILink($$) {
    let doi = this.props.node.find('pub-id[pub-id-type=doi]');

    if(doi) {
      if(doi.content !== '') {
        return $$('a').addClass('se-doi-link')
          .attr({target: '_blank', href: 'https://doi.org/' + doi.content})
          .append('https://doi.org/' + doi.content)
      }
    }
    return
  }

  _renderScholarLinks($$) {
    let pmid = this.props.node.find('pub-id[pub-id-type=pmid]');
    let articleTitle = this.props.node.find('article-title');
    let el = $$('div').addClass('se-scholar-links');

    if(pmid) {
      if(pmid.content !== '') {
        el.append(
          $$('a').addClass('se-pubmed-link')
            .attr({target: '_blank', href: 'https://www.ncbi.nlm.nih.gov/pubmed/' + pmid.content})
            .append('PubMed'),
          ' | '
        );
      }
    }

    if(articleTitle) {
      if(articleTitle.content !== '') {
        el.append(
          $$('a').addClass('se-google-scholar-link')
            .attr({target: '_blank', href: 'https://scholar.google.com/scholar_lookup?title=' + articleTitle.content})
            .append('Google Scholar')
        );

        return el
      }
    }

    return
  }

}

class RefComponent extends substance.Component {

  didMount() {
    this.context.editorSession.on('ref:updated', this._onRefUpdated, this);
    // HACK: Ensure we trigger a rerender whenever the article-title or chapter-title is changed
    let node = this.props.node;
    let title = node.find('article-title') || node.find('chapter-title');
    if (title) {
      this.context.editorSession.onRender('document', this.rerender, this, {
        path: [title.id, 'content']
      });
    }
  }

  dispose() {
    this.context.editorSession.off(this);
  }

  _onRefUpdated(refId) {
    if (this.props.node.id === refId) {
      this.rerender();
    }
  }

  render($$) {
    let el = $$('div').addClass('sc-ref');
    let ref = this.props.node;
    let label = this.context.labelGenerator.getPosition('bibr', ref.id);
    let elementCitation = ref.find('element-citation');

    if (label) {
      el.append(
        $$('div').addClass('se-label').append(
          label
        )
      );
    }

    if (elementCitation) {
      el.append(
        $$(ElementCitationComponent, { node: elementCitation } ).on('click', this._editRef)
      );
    } else {
      console.warn('No element citation found');
    }

    el.append(
      $$('div').addClass('se-remove-ref')
        .append(
          $$(substance.FontAwesomeIcon, { icon: 'fa-trash' })
        )
        .on('click', this._removeRef.bind(this, ref.id))
    );
    return el
  }

  _editRef() {
    this.send('switchContext', {
      contextId: 'edit-ref',
      nodeId: this.props.node.id
    });
  }

  _removeRef(refId) {
    this.send('removeRef', refId);
  }
}

class SeparatorComponent extends substance.Component {

  render($$) {
    let label = this.props.label;
    let el = $$('div').addClass('sc-separator')
      .append(
        $$('span').addClass('se-label').append(this.getLabel(label))
      );

    return el
  }

}

class SigBlockComponent extends substance.NodeComponent {

  render($$) {
    const sigBlock = this.props.node;

    let el = $$('div').addClass('sc-sig-block');
    el.append($$(this.getComponent('separator'), {
      label: 'sig-block-start'
    }));

    let sigs = sigBlock.findAll('sig');

    sigs.forEach((sig) => {
      el.append($$(this.getComponent('container'), {
        node: sig,
        disabled: this.props.disabled
      })).ref(sig.id);
    });

    el.append($$(this.getComponent('separator'), {
      label: 'sig-block-start'
    }));

    return el
  }

}

class TitleGroupComponent extends substance.Component {

  render($$) {
    const node = this.props.node;
    let el = $$('div')
      .addClass('sc-title-group')
      .attr('data-id', node.id);

    // article-title is mandatory
    const articleTitle = node.findChild('article-title');
    let titleEl = $$(this.getComponent('text-property-editor'), {
      name: 'titleEditor',
      placeholder: 'Enter Title',
      path: articleTitle.getTextPath(),
      disabled: this.props.disabled
    }).addClass('se-article-title').ref('title');

    // TODO: sub-title etc.
    el.append(titleEl);

    return el
  }
}

class XrefComponent extends substance.Component {

  didMount() {
    this.context.labelGenerator.on('labels:generated', this.rerender, this);
  }

  dispose() {
    this.context.labelGenerator.off(this);
  }

  render($$) {
    let node = this.props.node;
    let refType = node.getAttribute('ref-type');
    let el = $$('span').addClass('sc-xref');
    let labelGenerator = this.context.labelGenerator;
    let targets = getXrefTargets(node);
    let generatedLabel = labelGenerator.getLabel(refType, targets);
    el.append(generatedLabel);
    el.addClass('sm-'+refType);
    return el
  }
}

/*
  Renders a keyboard-selectable ref preview item
*/
class RefPreview extends substance.Component {

  render($$) {
    let labelGenerator = this.context.labelGenerator;
    let el = $$('div')
      .addClass('sc-ref-preview')
      .attr({'data-id': this.props.node.id});

    if (this.props.selected) {
      el.addClass('sm-selected');
    }

    el.append(
      $$('div').addClass('se-label').append(
        String(labelGenerator.getPosition('bibr', this.props.node.id) || '')
      )
    );

    let node = this.props.node.find('element-citation');
    el.append(
      $$(ElementCitationTitle, {node}),
      $$(ElementCitationAuthorsAndYear, {node})
    );
    return el
  }
}

/*
  Renders a keyboard-selectable ref preview item
*/
class FnPreview extends substance.Component {

  render($$) {
    let labelGenerator = this.context.labelGenerator;
    let TextNode = this.getComponent('text-node');
    let el = $$('div')
      .addClass('sc-fn-preview')
      .attr({'data-id': this.props.node.id});

    if (this.props.selected) {
      el.addClass('sm-selected');
    }

    el.append(
      $$('div').addClass('se-label').append(
        String(labelGenerator.getPosition('fn', this.props.node.id) || '')
      )
    );

    let node = this.props.node;
    let firstP = node.find('p');
    if (firstP) {
      el.append(
        $$(TextNode, {
          node: firstP
        })
      );
    }

    return el
  }
}

/*
  Renders a keyboard-selectable figure target item
*/
class FigPreview extends substance.Component {

  render($$) {
    let node = this.props.node;
    let el = $$('div')
      .addClass('sc-fig-preview')
      .attr({'data-id': node.id});

    if (this.props.selected) {
      el.addClass('sm-selected');
    }
    el.append(this._renderThumbnail($$));
    el.append(this._renderLabel($$));
    return el
  }

  /*
    Render thumbnail based on the contents of the figure
  */
  _renderThumbnail($$) {
    let node = this.props.node;
    // TODO: Make this work with tables as well
    let contentNode = node.find('graphic');
    let el = $$('div').addClass('se-thumbnail');
    if (contentNode) {
      el.append(
        $$(this.getComponent(contentNode.type), {
          node: contentNode,
          disabled: this.props.disabled
        })
      );
    } else {
      el.append('No thumb');
    }
    return el
  }

  _renderLabel($$) {
    let labelGenerator = this.context.labelGenerator;
    let label = labelGenerator.getPosition('fig', this.props.node.id);
    return $$('div').addClass('se-label').append(
      'Figure ', label
    )
  }
}

/*
  Renders a keyboard-selectable figure target item
*/
class TableFigPreview extends substance.Component {

  render($$) {
    let node = this.props.node;
    let el = $$('div')
      .addClass('sc-table-fig-preview')
      .attr({'data-id': node.id});

    if (this.props.selected) {
      el.addClass('sm-selected');
    }
    el.append(this._renderLabel($$));
    return el
  }

  _renderLabel($$) {
    let labelGenerator = this.context.labelGenerator;
    let pos = labelGenerator.getPosition('table', this.props.node.id);
    return $$('div').addClass('se-label').append(
      'Table ', pos
    )
  }
}

class DecreaseHeadingLevelCommand extends substance.Command {

  getCommandState(params) {
    let doc = params.editorSession.getDocument();
    let sel = params.selection;
    let isBlurred = params.editorSession.isBlurred();

    let commandState = {
      disabled: false
    };

    if (sel.isPropertySelection() && !isBlurred) {
      let path = sel.getPath();
      let node = doc.get(path[0]);
      if (node 
        && node.isBlock() 
        && node.type === 'heading') {
        commandState.active = true;
      } else {
        commandState.disabled = true;
      }
    } else {
      commandState.disabled = true;
    }

    return commandState
  }

  execute(params) {
    let sel = params.selection;
    let editorSession = params.editorSession;
    let doc = editorSession.getDocument();
    let path = sel.getPath();
    let node = doc.get(path[0]);
    if (node.getAttribute('level') > 1) {
      editorSession.transaction((txDoc) => {
        let node = txDoc.get(path[0]);
        node.setAttribute('level', String(parseInt(node.level, 10) - 1));
      });
    }
  }
}

class IncreaseHeadingLevelCommand extends substance.Command {

  getCommandState(params) {
    let doc = params.editorSession.getDocument();
    let sel = params.selection;
    let isBlurred = params.editorSession.isBlurred();

    let commandState = {
      disabled: false
    };

    if (sel.isPropertySelection() && !isBlurred) {
      let path = sel.getPath();
      let node = doc.get(path[0]);
      if (node 
        && node.isBlock() 
        && node.type === 'heading') {
        commandState.active = true;
      } else {
        commandState.disabled = true;
      }
    } else {
      commandState.disabled = true;
    }

    return commandState
  }

  execute(params) {
    let sel = params.selection;
    let editorSession = params.editorSession;
    let doc = editorSession.getDocument();
    let path = sel.getPath();
    let node = doc.get(path[0]);
    if(node.getAttribute('level') < 3) {
      editorSession.transaction((txDoc) => {
        let node = txDoc.get(path[0]);
        node.setAttribute('level', String(parseInt(node.level, 10) + 1));
      });
    }
  }
}

class InsertXrefCommand extends substance.InsertInlineNodeCommand {
  createNodeData() {
    let refType = this.config.refType;
    return {
      id: substance.uuid('xref'),
      type: 'xref',
      attributes: {
        'ref-type': refType,
        'rid': ''
      }
    }
  }
}

substance.substanceGlobals.DEBUG_RENDERING = true;

var EditorPackage = {
  name: 'author',
  configure(config) {
    config.import(substance.BasePackage);
    config.import(substance.PersistencePackage);
    config.import(substance.FindAndReplacePackage, {
      rootElement: '.sc-article'
    });
    config.import(substance.MultiSelectPackage);
    config.import(TextureJATSPackage);

    // EXPERIMENTAL:
    // a CommandManager that uses the xmlSchema to inhibit commands
    // which would generate disallowed content
    config.setCommandManagerClass(substance.SchemaDrivenCommandManager);

    // Base functionality
    config.addComponent('text-node', TextNodeComponent);
    config.addComponent('text-property-editor', substance.TextPropertyEditor);
    config.addComponent('plain-text-property', PlainTextComponent);
    config.addComponent('container', ContainerNodeComponent);
    config.addComponent('heading', HeadingComponent);
    config.addComponent('unsupported', UnsupportedNodeComponent);
    config.addComponent('unsupported-inline-node', UnsupportedInlineNodeComponent);

    // Node components
    config.addComponent('abstract', AbstractComponent);
    config.addComponent('affiliations', AffiliationsComponent);
    config.addComponent('affiliations-list', AffiliationsList);
    config.addComponent('authors-list', AuthorsListComponent);
    config.addComponent('article-record', ArticleRecordComponent);
    config.addComponent('translations', TranslationsComponent);
    config.addComponent('back', BackComponent);
    config.addComponent('body', BodyComponent);
    config.addComponent('break', BreakComponent);
    config.addComponent('caption', CaptionComponent);
    config.addComponent('col', ElementNodeComponent);
    config.addComponent('colgroup', ElementNodeComponent);
    config.addComponent('disp-quote', DispQuote);
    config.addComponent('front', FrontComponent);
    config.addComponent('fig', FigComponent);
    config.addComponent('fn', FnComponent);
    config.addComponent('fn-group', FnGroupComponent);
    config.addComponent('graphic', GraphicComponent);
    config.addComponent('pub-history', PubHistoryComponent);
    config.addComponent('ref', RefComponent);
    config.addComponent('ref-list', RefListComponent);
    config.addComponent('separator', SeparatorComponent);
    config.addComponent('sig-block', SigBlockComponent);
    config.addComponent('table', ElementNodeComponent);
    config.addComponent('table-wrap', FigComponent);
    config.addComponent('tbody', ElementNodeComponent);
    config.addComponent('td', TableCellComponent);
    config.addComponent('tfoot', ElementNodeComponent);
    config.addComponent('th', TableCellComponent);
    config.addComponent('thead', ElementNodeComponent);
    config.addComponent('title-group', TitleGroupComponent);
    config.addComponent('toc', TOC);
    config.addComponent('tr', ElementNodeComponent);
    config.addComponent('xref', XrefComponent);

    // Panels and other displays
    config.addComponent('manuscript', ManuscriptComponent);
    config.addComponent('contributors', ContributorsComponent);
    config.addComponent('edit-ref', EditRef);

    // Preview components for Ref, Fn, Figure
    config.addComponent('ref-preview', RefPreview);
    config.addComponent('fn-preview', FnPreview);
    config.addComponent('fig-preview', FigPreview);
    config.addComponent('table-wrap-preview', TableFigPreview);

    // Commands
    config.addCommand('edit-xref', substance.EditInlineNodeCommand, {
      nodeType: 'xref',
      commandGroup: 'prompt'
    });
    config.addCommand('insert-xref-bibr', InsertXrefCommand, {
      refType: 'bibr',
      commandGroup: 'insert-xref'
    });
    config.addCommand('insert-xref-fig', InsertXrefCommand, {
      refType: 'fig',
      commandGroup: 'insert-xref'
    });
    config.addCommand('insert-xref-table', InsertXrefCommand, {
      refType: 'table',
      commandGroup: 'insert-xref'
    });
    config.addCommand('insert-xref-fn', InsertXrefCommand, {
      refType: 'fn',
      commandGroup: 'insert-xref'
    });
    config.addCommand('decrease-heading-level', DecreaseHeadingLevelCommand, {
      commandGroup: 'text-level'
    });
    config.addCommand('increase-heading-level', IncreaseHeadingLevelCommand, {
      commandGroup: 'text-level'
    });
    config.addKeyboardShortcut('shift+tab', { command: 'decrease-heading-level' });
    config.addKeyboardShortcut('tab', { command: 'increase-heading-level' });

    config.addLabel('insert-xref-bibr', 'Citation');
    config.addLabel('insert-xref-fig', 'Figure Reference');
    config.addLabel('insert-xref-table', 'Table Reference');
    config.addLabel('insert-xref-fn', 'Footnote Reference');
    config.addLabel('manuscript-start', 'Manuscript starts here');
    config.addLabel('manuscript-end', 'Manuscript ends here');
    config.addLabel('sig-block-start', 'Signature Block starts here');
    config.addLabel('sig-block-end', 'Signature Block ends here');

    // Tools
    config.addTool('edit-xref', EditXRefTool);
    // Annotation tools
    config.addAnnotationTool({
      name: 'bold',
      nodeType: 'bold',
      commandGroup: 'formatting',
      icon: 'fa-bold',
      label: 'Strong',
      accelerator: 'CommandOrControl+B'
    });

    config.addAnnotationTool({
      name: 'italic',
      nodeType: 'italic',
      commandGroup: 'formatting',
      icon: 'fa-italic',
      label: 'Emphasize',
      accelerator: 'CommandOrControl+I'
    });

    config.addAnnotationTool({
      name: 'sub',
      nodeType: 'sub',
      commandGroup: 'formatting',
      icon: 'fa-subscript',
      label: 'Subscript'
    });

    config.addAnnotationTool({
      name: 'sup',
      nodeType: 'sup',
      commandGroup: 'formatting',
      icon: 'fa-superscript',
      label: 'Superscript'
    });

    config.addAnnotationTool({
      name: 'ext-link',
      nodeType: 'ext-link',
      commandGroup: 'formatting',
      icon: 'fa-link',
      label: 'Link',
      accelerator: 'CommandOrControl+K'
    });

    config.addTextTypeTool({
      name: 'heading1',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        attributes: { level: '1' }
      },
      icon: 'fa-header',
      label: 'Heading 1',
      accelerator: 'CommandOrControl+Alt+1'
    });

    config.addTextTypeTool({
      name: 'heading2',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        attributes: { level: '2' }
      },
      icon: 'fa-header',
      label: 'Heading 2',
      accelerator: 'CommandOrControl+Alt+2'
    });

    config.addTextTypeTool({
      name: 'heading3',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'heading',
        attributes: { level: '3' }
      },
      icon: 'fa-header',
      label: 'Heading 3',
      accelerator: 'CommandOrControl+Alt+3'
    });

    config.addTextTypeTool({
      name: 'paragraph',
      commandGroup: 'text-types',
      nodeSpec: {
        type: 'p'
      },
      icon: 'fa-paragraph',
      label: 'Paragraph',
      accelerator: 'CommandOrControl+Alt+0'
    });

    config.addCommand('edit-ext-link', substance.EditAnnotationCommand, {
      nodeType: 'ext-link',
      commandGroup: 'prompt'
    });

    // ExtLink
    config.addTool('edit-ext-link', EditExtLinkTool);
    config.addIcon('open-link', { 'fontawesome': 'fa-external-link' });
    config.addLabel('open-link', 'Open Link');

    // Declarative spec for tool display
    config.addToolPanel('toolbar', [
      {
        name: 'text-types',
        type: 'tool-dropdown',
        showDisabled: false,
        style: 'descriptive',
        commandGroups: ['text-types']
      },
      {
        name: 'persistence',
        type: 'tool-group',
        showDisabled: true,
        style: 'descriptive',
        commandGroups: ['persistence']
      },
      {
        name: 'annotations',
        type: 'tool-group',
        showDisabled: true,
        style: 'minimal',
        commandGroups: ['formatting']
      },
      {
        name: 'insert',
        type: 'tool-dropdown',
        showDisabled: true,
        style: 'descriptive',
        commandGroups: ['insert-xref']
      }
    ]);

    config.addToolPanel('main-overlay', [
      {
        name: 'prompt',
        type: 'tool-prompt',
        showDisabled: false,
        commandGroups: ['prompt']
      }
    ]);

    config.addToolPanel('workflow', [
      {
        name: 'workflow',
        type: 'tool-group',
        commandGroups: ['workflows']
      }
    ]);

    // Add labels for groups
    config.addLabel('structure', 'Structure');
    config.addLabel('article-info', 'Article Information');

    // Add labels for panels
    config.addLabel('toc', 'Table of Contents');
    config.addLabel('article-record', 'Article Record');
    config.addLabel('affiliations', 'Manage Affiliations');
    config.addLabel('contributors', 'Authors & Contributors');
    config.addLabel('translations', 'Translations');
    config.addLabel('pub-data', 'Publication Data');
    config.addLabel('edit-ref', 'Edit Reference');

    /*
      Define panel structure
    */
    config.setPanelsSpec([
      { group: 'structure' },
      { panel: 'toc' },
      { group: 'article-info' },
      { panel: 'contributors' },
      { panel: 'affiliations' },
      { panel: 'translations' },
      { group: 'pub-data' },
      { panel: 'article-record' }
    ]);
  },
  Editor
};

class TextureConfigurator extends substance.Configurator {

  addAnnotationTool(spec) {
    this.addCommand(spec.name, substance.AnnotationCommand, {
      nodeType: spec.nodeType,
      commandGroup: spec.commandGroup,
    });
    this.addIcon(spec.name, { 'fontawesome': spec.icon });
    this.addLabel(spec.name, spec.label);
    if (spec.accelerator) {
      this.addKeyboardShortcut(spec.accelerator, { command: spec.name });
    }
  }

  addTextTypeTool(spec) {
    this.addCommand(spec.name, substance.SwitchTextTypeCommand, {
      spec: spec.nodeSpec,
      commandGroup: 'text-types'
    });
    this.addIcon(spec.name, { 'fontawesome': spec.icon });
    this.addLabel(spec.name, spec.label);
    if (spec.accelerator) {
      this.addKeyboardShortcut(spec.accelerator, { command: spec.name });
    }

  }

  setPanelsSpec(panelsSpec) {
    this.config.panelsSpec = panelsSpec;
  }

  getPanelsSpec() {
    return this.config.panelsSpec
  }

}

/*
  Texture Component
  Based on given mode prop, displays the Publisher, Author or Reader component
*/
class Texture extends substance.Component {

  constructor(parent, props) {
    super(parent, props);
    this.configurator = new TextureConfigurator();
    this.configurator.import(EditorPackage);
    this.jatsImporter = new JATSImporter();
    this.jatsExporter = new JATSExporter();
  }

  getInitialState() {
    return {
      editorSession: null,
      loadingError: null
    }
  }

  getChildContext() {
    return {
      xmlStore: {
        readXML: this.props.readXML,
        writeXML: this.props.writeXML
      },
      exporter: this.jatsExporter,
      // HACK: Find a better way to pass this information to SaveHandler, as
      // this does not get updated when new props arrive
      documentId: this.props.documentId
    }
  }

  didMount() {
    // load the document after mounting
    setTimeout(() => {
      this._loadDocument(this.props.documentId);
    }, 200);
  }

  willReceiveProps(newProps) {
    if (newProps.documentId !== this.props.documentId) {
      this.dispose();
      this.state = this.getInitialState();
      this._loadDocument(newProps.documentId);
    }
  }

  dispose() {
    // Note: we need to clear everything, as the childContext
    // changes which is immutable
    this.empty();
  }

  render($$) {
    let el = $$('div').addClass('sc-texture');

    if (this.state.loadingError) {
      el.append(this.state.loadingError);
    }

    if (this.state.editorSession) {
      el.append(
        $$(EditorPackage.Editor, {
          editorSession: this.state.editorSession
        })
      );
    } else if (this.state.importerErrors) {
      el.append(
        $$(JATSImportDialog, { errors: this.state.importerErrors })
      );
    }
    return el
  }

  getConfigurator() {
    return this.configurator
  }

  _loadDocument() {
    console.info('Loading document', this.props.documentId);
    const configurator = this.getConfigurator();
    this.props.readXML(this.props.documentId, function(err, xmlStr) {
      if (err) {
        console.error(err);
        this.setState({
          loadingError: new Error('Loading failed')
        });
        return
      }
      console.info('.. received XML', xmlStr);
      let dom = substance.DefaultDOMElement.parseXML(xmlStr);
      const doctype = dom.getDoctype();
      if (doctype.publicId !== 'TextureJATS 1.1') {
        console.info('.. seems to be a JATS file');
        console.info('Starting importer...');
        dom = this.jatsImporter.import(dom);
        if (this.jatsImporter.hasErrored()) {
          console.error('Could not transform to TextureJATS');
          this.setState({
            importerErrors: this.jatsImporter.errors
          });
          return
        }
      } else {
        // TODO: we should still validate TextureJATS
        console.info('.. it is TextureJATS (no conversion will be applied)');
      }

      console.info('.. we should be fine now.');
      const importer = configurator.createImporter('texture-jats');
      const doc = importer.importDocument(dom);

      window.doc = doc;

      console.info('Starting Editor session ...');
      // create editor session
      const editorSession = new substance.EditorSession(doc, {
        configurator: configurator
      });
      this.setState({
        editorSession: editorSession
      });
    }.bind(this));
  }

}

// TODO: add index files for the other folders as well

exports.Texture = Texture;
exports.EditorPackage = EditorPackage;
exports.TextureConfigurator = TextureConfigurator;
exports.JATS = JATSArchiving;
exports.JATSArchiving = JATSArchiving;
exports.JATSPublishing = JATSPublishing;
exports.JATS4R = JATS4R;
exports.TextureJATS = TextureJATS;
exports.TextureDocument = TextureDocument;
exports.TextureHTMLConverters = TextureHTMLConverters;
exports.TextureJATSExporter = TextureJATSExporter;
exports.TextureJATSImporter = TextureJATSImporter;
exports.TextureJATSPackage = TextureJATSPackage;
exports.XrefIndex = XrefIndex;
exports.JATSImportDialog = JATSImportDialog;
exports.JATSImporter = JATSImporter;
exports.JATSExporter = JATSExporter;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=./texture.js.map