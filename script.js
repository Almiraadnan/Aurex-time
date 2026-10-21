  document.getElementById('orderForm').addEventListener(
      'submit',
      function(e) {
        e.preventDefault();

        const value = id =>
          document.getElementById(id).value.trim();

        const lines = [
          'Aurex Time — New Order',
          '',
          'Full Name: ' + value('customerName'),
          'Mobile / WhatsApp: ' + value('phone'),
          'Complete Address: ' + value('address'),
          'City: ' + value('city'),
          'Area / Postal Code: ' +
            (value('area') || 'Not provided'),
          'Product Name: ' +
            (value('product') || 'Not provided'),
          '',
          'Note: If a product picture was selected, please attach it separately in WhatsApp.'
        ];

        const whatsappNumber = '92314764357';

        const whatsappURL =
          'https://wa.me/' + whatsappNumber +
          '?text=' + encodeURIComponent(lines.join('\n'));

        window.location.href = whatsappURL;
      }
    );